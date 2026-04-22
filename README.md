# Recruitment Pipeline – ZeloraTech Technical Challenge

A full-stack recruitment pipeline application built with React (frontend) and Node.js/Express (backend). The UI is based on the provided Kanban-style recruitment interface design.

---

## Project Structure

```
project/
├── backend/
│   └── server.js
├── frontend/
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       └── Components/
│           ├── Sidebar.jsx
│           ├── Topbar.jsx
│           ├── KanbanBroad.jsx
│           ├── CandidateCard.jsx
│           └── AddCandidateModal.jsx
└── README.md
```

---

## Tech Stack

**Frontend**

- React (Vite)
- Plain CSS (no Tailwind)
- Lucide React (icons)

**Backend**

- Node.js
- Express
- CORS

---

## Setup Instructions

### 1. Clone or extract the project

```bash
unzip project.zip
cd project
```

### 2. Run the Backend

```bash
cd backend
npm install
node server.js
```

Server will start at: `http://localhost:5000`

### 3. Run the Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend will start at: `http://localhost:5173`

> ⚠️ Make sure both terminals are running at the same time.

---

## API Endpoints

| Method | Endpoint              | Description            |
| ------ | --------------------- | ---------------------- |
| GET    | `/api/candidates`     | Get all candidates     |
| GET    | `/api/candidates/:id` | Get single candidate   |
| POST   | `/api/candidates`     | Add new candidate      |
| PATCH  | `/api/candidates/:id` | Update candidate stage |
| DELETE | `/api/candidates/:id` | Delete candidate       |

You can also filter by stage using a query parameter:

```
GET /api/candidates?stage=Screening
```

---

## Features Implemented

- Kanban board with 4 stages: Applying Period, Screening, Interview, Test
- View all candidates grouped by stage
- Add new candidate via modal (Name, Date of Birth, Rating, Referred status)
- Move candidate to next stage
- Delete candidate
- Search candidates by name (live filter)
- Responsive layout
- Dummy data pre-loaded on server start

---

## Assumptions and Decisions

- Data is stored **in-memory** on the server. The assignment explicitly allows this ("Store data in memory or use a database"). Data resets when the server restarts.
- Candidates always start in the **Applying Period** stage when added.
- The **Move button** on each card advances the candidate to the next stage only (one step at a time), which reflects a realistic recruitment pipeline flow.
- Profile photos are replaced with **colored avatar initials** since no image assets were provided.
- Plain CSS was used throughout as required — no Tailwind CSS.
- The `date` field on a candidate refers to their **application date**, not date of birth. Date of birth is collected on add but stored separately as `dob`.
- **Assessment status** is displayed as `+ Add Assessment` on cards. Full assessment CRUD was noted as an optional feature and was not implemented within the submission timeframe.

---

## Running Frontend and Backend Separately

The frontend runs on port **5173** (Vite default) and the backend runs on port **5000**. They communicate via `fetch` calls to `http://localhost:5000`. CORS is enabled on the backend to allow this.

To run them separately, just open two terminal windows and follow the setup steps above — one for `backend/`, one for `frontend/`.
