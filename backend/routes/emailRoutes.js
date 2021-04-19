import express from 'express';
import nodemailer from 'nodemailer';
import mailGun from 'nodemailer-mailgun-transport';
const router = express.Router();

router.post('/contact', (request, response) => {
	const auth = {
		auth: {
			api_key: process.env.NODEMAILER_API_KEY,
			domain: process.env.NODEMAILER_DOMAIN,
		},
	};

	const transporter = nodemailer.createTransport(mailGun(auth));

	const mailOptions = {
		from: request.body.email,
		to: process.env.EMAIL_USER,
		subject: request.body.subject,
		text: request.body.message,
	};

	transporter.sendMail(mailOptions, function (err, data) {
		if (err) {
			console.log('ERRORD', err);
		} else {
			console.log('Send it bruh!');
		}
	});

	const mail = {
		from: name,
		to: process.env.EMAIL_USER,
		subject: 'BA Art Contact Form Message',
		html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Subject: ${subject}</p><p>Message: ${message}</p>`,
	};

	contactEmail.sendMail(mail, (error) => {
		if (error) {
			response.json({ status: 'failed' });
		} else {
			response.json({ status: 'sent' });
		}
	});
});

export default router;
