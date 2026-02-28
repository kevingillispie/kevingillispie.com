export async function onRequestPost({ request, env }) {
    const { RECAPTCHA_SECRET, DESTINATION_EMAIL } = env;

    try {
        const body = await request.json();
        const {
            name,
            email,
            subject,
            message,
            'g-recaptcha-response': token,
            phone,
            confirm_email,
            timestamp
        } = body;
        // LOG 1: Check if request arrived
        console.log("Request received for:", email);

        // 1. Honeypot check
        if (phone || confirm_email) {
            console.warn("Honeypot triggered.");
            return new Response(JSON.stringify({ error: 'Bot detected (H)' }), { status: 400 });
        }

        // 2. Time check (Reduced to 2 seconds for easier testing)
        const timeTaken = Date.now() - Number(timestamp);
        if (timeTaken < 2000 || timeTaken > 600000) {
            console.warn(`Timing issue: ${timeTaken}ms`);
            return new Response(JSON.stringify({ error: 'Submission speed error' }), { status: 400 });
        }

        // 3. reCAPTCHA v3
        console.log("Verifying reCAPTCHA...");
        const verify = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                secret: RECAPTCHA_SECRET,
                response: token || '',
                remoteip: request.headers.get('CF-Connecting-IP') ?? '',
            }),
        });
        const captcha = await verify.json();

        if (!captcha.success || (captcha.score ?? 0) < 0.5) {
            console.error("reCAPTCHA failed:", captcha['error-codes'] || 'Low score');
            return new Response(JSON.stringify({ error: `Verification failed: ${captcha.score || 'check secret'}` }), { status: 400 });
        }

        // 4. Send via EmailJS
        console.log("reCAPTCHA passed. Contacting EmailJS...");
        const emailRes = await fetch("https://api.mailchannels.net/tx/v1/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                personalizations: [{
                    to: [{ email: DESTINATION_EMAIL, name: "Kevin Gillispie" }],
                }],
                from: {
                    email: `contact@kevingillispie.com`,
                    name: "Portfolio Contact Form",
                },
                subject: `[Contact Form] ${subject || "No Subject"}`,
                content: [{
                    type: "text/plain",
                    value: `From: ${name} (${email})\n\nMessage:\n${message}`,
                }],
            }),
        });

        if (!emailRes.ok) {
            const errorText = await emailRes.text();
            console.error("MailChannels Error:", errorText);
            return new Response(JSON.stringify({ error: "Mail server error" }), { status: 502 });
        }

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (err) {
        return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
    }
}