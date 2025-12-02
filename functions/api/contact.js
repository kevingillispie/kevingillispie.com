// functions/api/contact.ts   (or .js)
export async function onRequestPost({ request, env }) {
    const { RECAPTCHA_SECRET, TO_EMAIL } = env;

    try {
        const body = await request.json();
        const { name, email, subject, message, 'g-recaptcha-response': token, website } = body;

        // Honeypot
        if (website) {
            return new Response(JSON.stringify({ error: 'Bot detected' }), { status: 400 });
        }

        // reCAPTCHA v3 verification
        const verify = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                secret: RECAPTCHA_SECRET,
                response: token,
                remoteip: request.headers.get('CF-Connecting-IP') ?? '',
            }),
        });
        const captcha = await verify.json();

        if (!captcha.success || captcha.score < 0.5) {
            return new Response(JSON.stringify({ error: 'reCAPTCHA failed' }), { status: 400 });
        }

        // Basic validation
        if (!name?.trim() || !email?.includes('@') || !message?.trim() || message.length < 10) {
            return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400 });
        }

        // ───── Mailchannels magic (no SMTP credentials!) ─────
        const mailchannelsPayload = {
            personalizations: [{ to: [{ email: TO_EMAIL }] }],
            from: { email: "noreply@kevingillispie.com", name: "Website Contact Form" },
            reply_to: { email, name: name },
            subject: subject?.trim() || "New message from your website",
            content: [{
                type: "text/plain",
                value: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            }],
        };

        const mailRes = await fetch("https://api.mailchannels.net/tx/v1/send", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(mailchannelsPayload),
        });

        if (!mailRes.ok) {
            const text = await mailRes.text();
            console.error("Mailchannels error:", text);
            return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
        }

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
    }
}