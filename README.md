# SyncBoard - Collaborative Task Board

SyncBoard is a real-time, collaborative Kanban-style task board where teams can create boards, add tasks, and move them between columns (To Do / Doing / Done) with live sync.

## Tech Stack
* **Frontend:** React, Vite, TailwindCSS
* **Backend:** Node.js, Express, Socket.io
* **Database:** MongoDB Atlas & Mongoose
* **DevOps:** Docker, GitHub Actions (CI/CD)

## Setup Instructions

### Option 1: Run with Docker (Recommended)
1. Ensure Docker Desktop is running.
2. Clone this repository.
3. Run `docker-compose up --build` in the root directory.
4. Open `http://localhost:8080` in your browser.

### Option 2: Run Locally (Without Docker)
1. Clone the repository and open two terminals.
2. **Backend:** `cd server` -> `npm install` -> Create `.env` with `MONGO_URI` -> `npm run dev`
3. **Frontend:** `cd client` -> `npm install` -> `npm run dev`

## Architecture Diagram
*(Insert a link or image of your system architecture here showing React -> Node/Express -> MongoDB and Socket.io connections)*

## Known Limitations
* *List any bugs or incomplete features here (e.g., "Mobile drag-and-drop is currently unsupported").*