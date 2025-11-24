# EventUS Backend

## 📌 Overview

This is the backend API for the **EventUS - Event Management System**. It handles:

* User authentication (Admin & Attendee)
* Event creation & management
* Event registrations
* Role‑based access control (RBAC)
* Protected API routes using JWT

---

## 🛠️ Tech Stack

| Technology | Purpose                            |
| ---------- | ---------------------------------- |
| Node.js    | Runtime environment                |
| Express.js | Backend framework                  |
| MongoDB    | Database                           |
| Mongoose   | ODM for MongoDB                    |
| JWT        | Authentication                     |
| CORS       | Security for cross‑origin requests |

---

## 📦 Installation & Setup

### 🔧 Prerequisites

Make sure you have installed:

* Node.js (v14+)
* MongoDB (Local or Cloud)

### 📥 Clone the repository

```bash
cd backend
npm install
```

### 🔑 Environment Variables

Create a `.env` file inside backend folder:

```env
MONGO_URI=mongodb://127.0.0.1:27017/eventus
JWT_SECRET=your_secret_key
PORT=5000
```

✅ Replace values as needed.

---

## ▶️ Start Server

```bash
node server.js
```

Backend will run at:

```
http://localhost:5000
```

---

## 📡 API Routes

### 🔐 Authentication

| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| POST   | /api/auth/register | Register new user  |
| POST   | /api/auth/login    | Login user         |
| GET    | /api/auth/me       | Get logged‑in user |

### 📅 Events

| Method | Endpoint        | Description                     |
| ------ | --------------- | ------------------------------- |
| GET    | /api/events     | Get all available events        |
| POST   | /api/events     | Create new event *(Admin only)* |
| PUT    | /api/events/:id | Update event *(Admin only)*     |
| DELETE | /api/events/:id | Delete event *(Admin only)*     |

### 🧾 Registrations

| Method | Endpoint                           | Description                      |
| ------ | ---------------------------------- | -------------------------------- |
| POST   | /api/registrations                 | Register for an event (Attendee) |
| GET    | /api/registrations/:userId         | Get registered events for user   |
| DELETE | /api/registrations/:registrationId | Cancel registration              |

---

## 🛂 Role Based Access

| Role     | Permissions                                                  |
| -------- | ------------------------------------------------------------ |
| Admin    | Create / Edit / Delete events, View attendees                |
| Attendee | Register / Unregister for events, View own registered events |

---

## 🧪 Testing

Use Postman, Thunder Client, or Insomnia to test backend APIs.

---

## 📞 Support

If you have any questions or issues, feel free to ask! 😄
