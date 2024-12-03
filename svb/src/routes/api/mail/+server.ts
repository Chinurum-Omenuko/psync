import Mailjet from 'node-mailjet';
import { json } from '@sveltejs/kit';

// Replace with your Mailjet API credentials
const mailjet = Mailjet.apiConnect('486b26999cf0f5fba5b98c3aeeb4c4b8', 'abda098e30dc9d5612a22f69d69ae188');

interface MailjetResponse {
    body: {
      Messages: Array<{
        Status: string;
      }>;
    };
}

export async function POST({ request }) {
	try {
		const { subject, message } = await request.json();

		const response = await mailjet
			.post('send', { version: 'v3.1' })
			.request({
				Messages: [
					{
						From: {
							Email: 'ediks05@gmail.com',
							Name: 'Edikan Omen',
						},
						To: [
							{
								Email: 'chinuomenu@gmail.com',
								Name: 'Chinurum Omenuko',
							},
						],
						Subject: subject,
						TextPart: message,
					},
				],
			});

        const messageStatus = (response as unknown as MailjetResponse).body.Messages?.[0]?.Status;
		if (messageStatus === 'success') {
			return json({ success: true, message: 'Email sent successfully!' });
		} else {
			throw new Error('Email failed to send.');
		}
	} catch (error) {
		return json({ success: false, error: error }, { status: 500 });
	}
}
