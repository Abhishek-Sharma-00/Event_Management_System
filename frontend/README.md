# EventUS Frontend

## 📌 Overview

A modern event management system frontend built using **React**, **Axios**, and **React Router**. This frontend allows both Admins and Attendees to interact with the EventUS platform.

---

## 🚀 Features

### 👨‍💼 Admin

* Manage events (Create / Edit / Delete)
* View attendee registrations
* Protected admin routes

### 👤 Attendee

* Register / Login with authentication
* View upcoming events
* Register for events
* View registered events in Attendee Dashboard
* Unregister from events

### 🔒 Authentication

* JWT Authentication
* Auto login with stored token
* Role‑based navigation

---

## 🛠️ Tech Stack

| Layer           | Technology               |
| --------------- | ------------------------ |
| UI Framework    | CRA       |
| Styling         | Tailwind css / Custom CSS |
| HTTP Client     | Axios                    |
| State & Context | React Context API        |
| Routing         | React Router DOM         |

---

## 📂 Project Structure

```
src/
│── api/          → API request handlers
│── assets/       → Images, icons
│── components/   → Reusable UI Components
│── context/      → Auth Context (login, register, logout)
│── pages/        → Page-level components
│── styles/       → Custom css styling
│── App.js        → Main app
│── index.js      → Entry point

```

---

## ⚙️ Setup & Installation

```bash
# Install dependencies
npm install

# Start frontend server
npm start
```

Runs on: **[http://localhost:3000](http://localhost:3000)**

---

## 🔗 API Base URL

Update this if your backend changes:

```
http://localhost:5000/api
```
---

## 🧭 Navigation Flow

| Role     | Default Redirect |
| -------- | ---------------- |
| Admin    | /admin/profile   |
| Attendee | /attendee        |
| Guest    | /login           |

---

## ✔️ Completed Screens

* Home Page
* Event List Page
* Login / Register Page
* Admin Profile
* Admin Dashboard
* Attendee Dashboard

---

## ❌ Known Issues

* Improve form validation
* Add loading skeleton for events

---

## 📌 Future Enhancements

* Event search & filter
* Image upload for events
* Admin manages attendees

---

## 🤝 Contributing

Pull requests are welcome! Improve UI or add new functionalities.

---

## 📄 License

This project is part of **EventUS** — for educational and portfolio purposes.