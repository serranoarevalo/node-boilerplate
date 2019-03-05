import mailgun from "mailgun-js";

const client = mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: process.env.MAILGUN_DOMAIN || ""
});

const sendMail = mail => client.messages().send(mail);

export const sendSomething = () => {
  const mail: mailgun.messages.SendData = {
    from: "Boilerplate <mail@domain.com>",
    to: "to@email.com",
    subject: "Boilerplate",
    html: ""
  };
  return sendMail(mail);
};
