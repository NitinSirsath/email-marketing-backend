export const emailTemplates = [
  {
    label: "AI Assisted",
    value: "AI Assisted",
    body: `HELLO WORLD`,
  },
  {
    label: "AI Assisted: Follow up",
    value: "AI Assisted: Follow up",
    body: (sequenceId) => `
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f9f9f9;
                  color: #333;
                }
                .email-container {
                  max-width: 600px;
                  margin: 20px auto;
                  padding: 20px;
                  background-color: #ffffff;
                  border: 1px solid #ddd;
                  border-radius: 8px;
                }
                .header {
                  font-size: 24px;
                  font-weight: bold;
                  text-align: center;
                  color: #28a745;
                  margin-bottom: 20px;
                }
                .content {
                  font-size: 16px;
                  line-height: 1.5;
                }
                .footer {
                  margin-top: 20px;
                  font-size: 14px;
                  text-align: center;
                  color: #777;
                }
              </style>
            </head>
            <body>
              <div class="email-container">
                <div class="header">Follow-Up Sequence Scheduled</div>
                <div class="content">
                  <p>Hello,</p>
                  <p>Your sequence <strong>${sequenceId}</strong> has been scheduled. This follow-up is AI-assisted to re-engage with your leads and ensure maximum impact.</p>
                  <p>Stay tuned for more updates, or contact us for any support.</p>
                  <p>Best regards,</p>
                  <p>The Automation Team</p>
                </div>
                <div class="footer">
                  This is an automated message. Please do not reply directly to this email.
                </div>
              </div>
            </body>
            </html>
          `,
  },
  {
    label: "Simple Reminder",
    value: "Simple Reminder",
    body: (sequenceId) => `
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f9f9f9;
                  color: #333;
                }
                .email-container {
                  max-width: 600px;
                  margin: 20px auto;
                  padding: 20px;
                  background-color: #ffffff;
                  border: 1px solid #ddd;
                  border-radius: 8px;
                }
                .header {
                  font-size: 24px;
                  font-weight: bold;
                  text-align: center;
                  color: #ff6600;
                  margin-bottom: 20px;
                }
                .content {
                  font-size: 16px;
                  line-height: 1.5;
                }
                .footer {
                  margin-top: 20px;
                  font-size: 14px;
                  text-align: center;
                  color: #777;
                }
              </style>
            </head>
            <body>
              <div class="email-container">
                <div class="header">Reminder: Sequence Scheduled</div>
                <div class="content">
                  <p>Hello,</p>
                  <p>This is a friendly reminder that your sequence <strong>${sequenceId}</strong> has been successfully scheduled. Stay organized and ensure all leads are engaged on time.</p>
                  <p>Feel free to reach out to our support team for any assistance.</p>
                  <p>Best regards,</p>
                  <p>The Automation Team</p>
                </div>
                <div class="footer">
                  This is an automated message. Please do not reply directly to this email.
                </div>
              </div>
            </body>
            </html>
          `,
  },
];
