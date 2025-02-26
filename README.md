# 📋 Workout App

A full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to create, view, update, and delete workout records. This app is designed to help users track their workouts, including exercise type, load, and reps.

---

## 🚀 Live Demo
You can check out the live version of the app here: [](#) (Add your deployment link here)

---

## 📚 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features
- Create, Read, Update, and Delete (CRUD) workout records.
- Track the following workout details:
  - Exercise Title
  - Load (in kg)
  - Reps
- Responsive UI using React and Tailwind CSS.
- Efficient state management using React Context API.
- Backend with Express and MongoDB for data storage.
- Error handling and input validation.

---

## 🛠 Tech Stack
- **Frontend:**
  - React.js
  - React Router
  - Tailwind CSS
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose for ORM)
- **Tools and Libraries:**
  - Axios for HTTP requests
  - Date-fns for date formatting
  - Nodemon for development server

---

## ⚙️ Installation

1. **Clone the repository:**
```bash
git clone https://github.com/XIUXIU25/workout_APP.git
cd workout_APP
```

2.	Install dependencies for both frontend and backend:
# Backend dependencies
```bash
cd mern
npm install
```

# Frontend dependencies
```bash
cd frontend
npm install
```

3.	Set up MongoDB:

•Make sure you have MongoDB installed and running.
•Create a MongoDB database named workoutDB (or your preferred name).

🔑 Environment Variables
Create a .env file in the root of the mern (backend) directory and add the following:
PORT=4000
MONGO_URI=your_mongodb_connection_string

Replace your_mongodb_connection_string with your MongoDB URI.
Example:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/workoutDB?retryWrites=true&w=majority

▶️ Usage
1.	Run the backend server:
    # In the root directory of mern (backend)
```bash
npm start
```

2.	Run the frontend:
```bash
npm start
```

🔄 API Endpoints

Workouts
	•	GET /api/workouts - Get all workouts
	•	GET /api/workouts/:id - Get a specific workout
	•	POST /api/workouts - Create a new workout
	•	PATCH /api/workouts/:id - Update an existing workout
	•	DELETE /api/workouts/:id - Delete a workout

🌐 Frontend Routes
	•	/ - Home page showing all workouts and a form to add a new workout.



📄 License

This project is licensed under the MIT License - see the LICENSE file for details.