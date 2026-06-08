# QuickNotes Board

A full-stack note management application built using React, PHP, and MySQL.

## Technologies Used

* React.js
* PHP
* MySQL
* XAMPP
* JavaScript
* HTML & CSS

## Features

* Create Notes
* View Notes
* Edit Notes
* Delete Notes
* Color-Coded Notes
* MySQL Database Storage
* Responsive User Interface

## Project Structure

```
QuickNotes_Project/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── backend/
│   ├── api.php
│   ├── db.php
│
├── database/
│   ├── quicknotes.sql
│
└── README.md
```

## Setup Instructions

### 1. Clone or Download the Project

Download the project files and extract them.

### 2. Database Setup

* Open phpMyAdmin.
* Create a database named `quicknotes`.
* Import `quicknotes.sql`.

### 3. Backend Setup

* Copy the backend files to your XAMPP htdocs directory.
* Update the database credentials in `db.php`.

### 4. Start XAMPP

Start:

* Apache
* MySQL

### 5. Run Frontend

Open terminal inside the frontend folder:

```bash
npm install
npm start
```

The React application will start on:

```
http://localhost:3000
```

(or another available port)

### API Endpoint

```
http://localhost:8080/quicknotes-api/api.php
```

## CRUD Operations

* Create Notes
* Read Notes
* Update Notes
* Delete Notes

## Future Improvements

* User Authentication
* Dark Mode
* Search and Filter Notes
* Cloud Deployment
* User-Specific Notes

## Author

Harmanpreet Kaur

Internship Web Development Project
