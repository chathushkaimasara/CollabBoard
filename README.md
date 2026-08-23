# CollabBoard

A real-time collaborative task workspace built with the MERN stack (MongoDB, Express, React, Node.js) and Vite.

## 1. Prerequisites & Environment Setup

Ensure you have Node.js and MongoDB installed on your local machine before proceeding. You will also need to configure the backend environment variables. Create a `.env` file inside the root of the `server` directory and paste the following keys:

`PORT=5000`
`MONGO_URI=your_mongodb_connection_string_here`
`JWT_SECRET=your_jwt_secret_key`

## 2. Installation & Running Locally

Follow these exact steps to initialize both the frontend and backend servers:

1. Clone this repository and open the root folder in your terminal.
2. Navigate to the backend using `cd server`, then run `npm install`.
3. Start the Express API server by running `node server.js` (runs on port 5000).
4. Open a second terminal window, navigate to the frontend using `cd client`, and run `npm install`.
5. Start the React UI by running `npm run dev` (runs on port 5173).

## 3. Test Credentials

To bypass the registration flow and immediately evaluate the core drag-and-drop UI, use the following credentials on the main login screen:

* **Email:** test@collabboard.com
* **Password:** admin123

## 4. Project Contributors

This system was developed, designed, and maintained by our project team 

1.	WMC Imasara: UI/UX architecture, responsive design system, project management, and final report compilation.

2.	Lakvinda Weerasinghe: Kanban Board layout and static Column React components.

3.	KPKN Nethmira: Task Card UI, HTML5 drag-and-drop integration, and React authentication forms.

4.  MMG Priyadarshana: Express REST API structure, JWT middleware, and User authentication controllers.

5.  AWH Santhusa: Socket.io real-time WebSocket synchronization setup.

6.	WGSJ Wijewardana: MongoDB database connection and Mongoose schema definitions.

7.	ADEN Jayarathna: Client-side offline persistence using IndexedDB.

8.	OAWS Ogodapola: Optimistic concurrency control and version-conflict detection logic.

9.  Galgamuwa Galgamuwa : API route integrations and state management.

10.	DACM Daranagama: Docker containerization and environment configuration.
