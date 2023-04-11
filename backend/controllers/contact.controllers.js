const catchAsyncErrors = require("../utils/catchAsyncErrors");
const nodemailer = require("nodemailer");

exports.sendEmail = catchAsyncErrors(async (req, res) => {
  const { name, email, phone, address, message } = req.body;
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  await transport.sendMail({
    from: process.env.EMAIL_FROM,
    to: "patilcdr@gmail.com,hrbookxpert@gmail.com",
    subject: "New Contact Notification",
    text: `Dear Admin,

    I wanted to notify you that we have received a new contact on our platform. Please find the details below:
    
    Name: ${name || "N/A"}
    Email: ${email || "N/A"}
    Mobile number: ${phone || "N/A"}
    Address: ${address || "N/A"}
    Message: ${message || "N/A"}
    
    If you require any further information or assistance in following up with this contact, please let me know.
    
    Thank you,
    
    `,
  });

  res.status(200).send({ message: "success" });
});
