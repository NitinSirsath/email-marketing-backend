import nodemailer from "nodemailer";

const sendEmail = async (email, subject, text) => {
  console.log("Creating transporter...");
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use Gmail as the email service
    auth: {
      user: "nitinsirsath8855@gmail.com",
      pass: "wpho pmmn umbp eqxk", // App-specific password
    },
  });

  try {
    console.log("Sending mail...");
    const info = await transporter.sendMail({
      from: '"Nitin" <nitinsirsath8855@gmail.com>', // Corrected email
      to: email, // Recipient's email address
      subject,
      text,
    });

    console.log(`Email sent to ${email}: ${info.response}`);
    console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`); // Preview email link
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

export default sendEmail;
