# Automated Attendance System for Rural Schools

## Project Overview

This project is a **web-based attendance management system** designed to help rural schools track student attendance efficiently. The system allows teachers and admins to manage student data, mark attendance using **QR codes**, and maintain records in a MongoDB database.

---

## Features

- **Teacher Login**: Teachers can log in using their credentials.
- **Admin Login**: Admins can log in to manage teachers, students, and view attendance reports.
- **Student Management**: View all students with details such as name, class, department, phone number, father's name, and address.
- **QR Code Attendance**: Each student has a unique QR code that teachers can scan to mark attendance.
- **Attendance Tracking**: Records are stored in MongoDB with date and status (Present/Absent).
- **Responsive Frontend**: User-friendly interface using EJS templates and CSS.

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript Templates), HTML, CSS
- **Database**: MongoDB
- **QR Code Generation**: `qrcode` npm package
- **QR Code Scanning**: `html5-qrcode` JavaScript library

---

## Project Structure

```
Attendance-System/
│
├─ app.js # Main Express app
├─ package.json # NPM dependencies
├─ init_Data/
│ ├─ index.js # Seed initial data
│ └─ studentData.js # Sample student data
├─ models/
│ ├─ student.js # Student schema
│ └─ teacher.js # Teacher schema
├─ public/ # CSS & static files
├─ views/ # EJS templates
│ ├─ home.ejs
│ ├─ students.ejs
│ ├─ scanner.ejs
│ ├─ teacherLogin.ejs
│ └─ adminLogin.ejs
└─ README.md
```
