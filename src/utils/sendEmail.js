import nodemailer from "nodemailer";

const sendEmail = async (email, subject, html) => {
  console.log("Creating transporter...");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // Ensure correct port for Gmail
    secure: false, // Use TLS
    auth: {
      user: "nitinsirsath8855@gmail.com",
      pass: "wpho pmmn umbp eqxk", // App-specific password
    },
  });

  try {
    console.log("Sending mail...");
    const info = await transporter.sendMail({
      from: '"Nitin" <nitinsirsath8855@gmail.com>',
      to: email,
      subject,
      html, // Use `html` for the email body
    });

    console.log(`Email sent to ${email}: ${info.response}`);
    console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

export default sendEmail;
