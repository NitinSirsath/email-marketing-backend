import Agenda from "agenda";
import dotenv from "dotenv";
import sendEmail from "../utils/sendEmail.js";

dotenv.config();

const mongoConnectionString = process.env.MONGO_URI;

// Initialize Agenda
const agenda = new Agenda({
  db: { address: mongoConnectionString, collection: "jobs" },
});

// Define "sendEmail" job
agenda.define("sendEmail", async (job) => {
  const { email, subject, html } = job.attrs.data; // Extract `html` instead of `text`

  try {
    console.log(`Executing job to send email to ${email}`);
    await sendEmail(email, subject, html); // Pass `html` to sendEmail
    console.log(`Email sent to ${email}`);
  } catch (error) {
    console.error(`Error while sending email to ${email}:`, error.message);
  }
});

export default agenda;
