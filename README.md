Here's the `README.md` file for your backend:

```markdown
# Email Marketing Backend

This repository contains the backend implementation for the Email Marketing Guide project, providing APIs for managing sequences, authentication, and email scheduling.

---

## Features

- **Node.js** with **Express.js** for building scalable REST APIs.
- **MongoDB** as the database for persistent storage.
- **Agenda.js** for job scheduling (e.g., email notifications).
- **Nodemailer** for sending transactional emails.
- **Environment Variable Management** using **dotenv**.
- **CORS** enabled for secure frontend-backend communication.

---

## Live Demo

- **Frontend Live Link**: [Email Marketing Guide Frontend](https://email-marketing-guide.vercel.app/)

---

## Getting Started

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-backend-repo.git
   cd your-backend-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and configure the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   EMAIL_USER=your_email_address
   EMAIL_PASS=your_email_password_or_app_password
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

---

## API Endpoints

### **Authentication**
- **POST `/auth/register`**
  - Registers a new user.
  - Request body: `{ "username": "user", "email": "user@example.com", "password": "password" }`

- **POST `/auth/login`**
  - Logs in a user and returns a token.
  - Request body: `{ "emailOrUsername": "user@example.com", "password": "password" }`

### **Sequences**
- **GET `/emails/all`**
  - Fetches all email sequences for the logged-in user.

- **POST `/emails/save`**
  - Creates or updates an email sequence.
  - Request body: `{ "email": "user@example.com", "scheduleTime": "2025-01-12T03:47:00.000Z", "nodes": [...], "emailBody": "..." }`

- **POST `/emails/delete`**
  - Deletes an email sequence by ID.
  - Request body: `{ "sequenceId": "id_of_sequence" }`

---

## Building for Production

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Start the production server:
   ```bash
   npm start
   # or
   yarn start
   ```

---

## Deploying the Backend

### **Deploy to Render**

1. Log in to [Render](https://render.com/).
2. Create a new **Web Service**.
3. Connect your GitHub repository and select the backend repo.
4. Add the environment variables in the **Environment** section.
5. Deploy the service and note the live API URL.

### **Other Hosting Options**
- **Heroku**: Follow their [documentation](https://devcenter.heroku.com/articles/deploying-nodejs) for deployment.
- **Railway**: Another great option for free deployments.

---

## References

- **Express.js**: [Documentation](https://expressjs.com/)
- **MongoDB**: [Documentation](https://www.mongodb.com/)
- **Nodemailer**: [Documentation](https://nodemailer.com/about/)
- **Agenda.js**: [Documentation](https://agenda.js.org/)

---

## Feedback or Questions?

Feel free to reach out:

- **Email**: [nitinsirsath8855@gmail.com](mailto:nitinsirsath8855@gmail.com)

---

## License

This project is licensed under the **MIT License**.
```

### Key Sections:
1. **Features**: Highlights backend capabilities.
2. **Getting Started**: Provides setup instructions.
3. **API Endpoints**: Lists all backend routes.
4. **Deploying the Backend**: Guides deployment to platforms like Render or Railway.
5. **References**: Useful links for the technologies used.
6. **Contact Information**: For feedback or questions.
