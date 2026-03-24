# Desktop Bridge App

A modern fullstack desktop application built using a custom bridge architecture that connects frontend, backend, and system-level APIs in a unified and scalable way.
Built under time pressure with focus on clean architecture and performance.

---

##Concept

This project demonstrates a **Bridge System Architecture** where all communication is handled through a single abstraction layer (`api.ts`).

Instead of directly calling backend APIs or browser features, the frontend interacts with a centralized bridge that manages:

* Backend communication
* Local data persistence
* System-level access

---

# Tech Stack

* React + TypeScript
* Vite
* Neutralinojs (Desktop App Framework)
* Node.js (Backend API)

---

## Features

### 1. Backend Integration

* Fetch data from a custom API
* Display dynamic server responses

### 2. Local Storage System

* Save user notes locally
* Persist data across sessions

### 3. System Information Access

* Retrieve system-level environment data using Neutralino

### 4. Bridge Layer (Core Feature)

* Centralized API handler (`api.ts`)
* Clean separation between UI and logic
* Scalable and maintainable structure

---

## Architecture

Frontend (React)
⬇
Bridge Layer (`api.ts`)
⬇

* Backend API (Node.js)
* Local Storage
* Neutralino System APIs

---

## How to Run

### 1. Start Backend

```bash
node server/index.js
```

### 2. Build Frontend

```bash
cd client
npm run build
```

### 3. Run Desktop App

```bash
neu run
```

---

## Why This Project?

This project was built to demonstrate:

* Understanding of fullstack architecture
* Ability to integrate desktop + web technologies
* Clean code organization using abstraction layers
* Practical problem solving and debugging

---

##  Author

Malak Elmalahi

---

## Future Improvements

* Replace localStorage with file system storage
* Add authentication system
* Improve UI/UX design
* Package the app for distribution

---

##  Final Note

This is not just a simple app — it is a demonstration of building a **scalable architecture** using modern technologies.

---
