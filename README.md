# Desktop Bridge App Template

A modern fullstack desktop starter template built using a custom bridge architecture that connects frontend, backend, and system-level APIs in a clean and scalable way.

This project is designed to help developers quickly start building lightweight desktop applications using web technologies with a clear structure and best practices.

---

## Project Structure

```text
myapp/
|- frontend/        # React + TypeScript UI
|- backend/         # Express API server
|- shared/          # Shared configuration (API paths, keys)
|- resources/       # Neutralino assets and runtime files
|- neutralino.config.json
```

---

## Architecture Overview

This project follows a **layered architecture**:

* **Frontend Layer**

  * Handles UI rendering
  * Communicates through a single API bridge (`api.ts`)

* **Backend Layer**

  * Handles business logic and API routes
  * Runs independently using Express

* **Shared Layer**

  * Centralizes configuration used across frontend and backend

* **Bridge Layer**

  * Connects frontend with backend and system APIs
  * Keeps UI logic clean and isolated from implementation details

---

## Features

* Backend integration (`GET /api/hello`)
* Local data persistence using `localStorage`
* System-level access via Neutralino (`Neutralino.os.getEnv`)
* Clean API bridge for frontend communication
* Scalable and beginner-friendly project structure

---

## Tech Stack

* React + TypeScript
* Vite
* Node.js + Express
* Neutralinojs

---

## Getting Started

### 1) Start backend

```bash
cd backend
npm start
```

### 2) Build frontend

```bash
cd frontend
npm run build
```

### 3) Run desktop app

```bash
neu run
```

---

## How to Use This Template

1. Replace UI components inside `frontend/`
2. Add your API routes inside `backend/`
3. Update shared configuration in `shared/app.config.json`
4. Extend the API bridge in `frontend/src/api.ts`

---

## Why This Project?

This project demonstrates:

* Real fullstack architecture in a desktop environment
* Clean separation of concerns (frontend / backend / shared)
* Practical integration between web and system-level APIs
* Writing scalable and maintainable code

---

## Future Improvements

* Replace localStorage with file system storage
* Add authentication system
* Improve UI/UX design
* Package the app for distribution

---

## Author

Malak Elmalahi

---

## Final Note

This is not just a simple application — it is a **starter template** designed to help developers build scalable desktop applications using modern web technologies.
