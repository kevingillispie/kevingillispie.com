export async function onRequestPost({ request, env }) {
    const { RECAPTCHA_SECRET, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY } = env;

    try {
        const body = await request.json();
        const { name, email, subject, message, 'g-recaptcha-response': token, phone, confirm_email, timestamp } = body;

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
        const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                service_id: EMAILJS_SERVICE_ID,
                template_id: EMAILJS_TEMPLATE_ID,
                user_id: EMAILJS_PUBLIC_KEY,
                accessToken: EMAILJS_PRIVATE_KEY,
                template_params: {
                    name: name.trim(),
                    email: email,
                    subject: subject?.trim() || "(no subject)",
                    message: message.trim(),
                },
            }),
        });

        if (!emailRes.ok) {
            const errorText = await emailRes.text();
            console.error("EmailJS Error:", errorText);
            return new Response(JSON.stringify({ error: "Email provider rejected the request" }), { status: 502 });
        }

        console.log("Email sent successfully!");
        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (err) {
        console.error("Critical Server Error:", err.stack);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}