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

        // EmailJS send (after validation)
        const emailjsPayload = {
            service_id: env.EMAILJS_SERVICE_ID,
            template_id: env.EMAILJS_TEMPLATE_ID,
            user_id: env.EMAILJS_PUBLIC_KEY,
            accessToken: env.EMAILJS_PRIVATE_KEY,
            template_params: {
                name: name.trim(),
                email: email,
                subject: subject?.trim() || "(no subject)",
                message: message.trim(),
            },
        };

        const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...emailjsPayload
            }),
        });

        if (!emailRes.ok) {
            const text = await emailRes.text();
            console.error("EmailJS error:", text);
            return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
        }

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
    }
}