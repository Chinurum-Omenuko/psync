import Mailjet from "node-mailjet";
import { j as json } from "../../../../chunks/index.js";
const mailjet = Mailjet.apiConnect("486b26999cf0f5fba5b98c3aeeb4c4b8", "abda098e30dc9d5612a22f69d69ae188");
async function POST({ request }) {
  try {
    const { subject, message } = await request.json();
    const response = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "ediks05@gmail.com",
            Name: "Edikan Omen"
          },
          To: [
            {
              Email: "chinuomenu@gmail.com",
              Name: "Chinurum Omenuko"
            }
          ],
          Subject: subject,
          TextPart: message
        }
      ]
    });
    const messageStatus = response.body.Messages?.[0]?.Status;
    if (messageStatus === "success") {
      return json({ success: true, message: "Email sent successfully!" });
    } else {
      throw new Error("Email failed to send.");
    }
  } catch (error) {
    return json({ success: false, error }, { status: 500 });
  }
}
export {
  POST
};
