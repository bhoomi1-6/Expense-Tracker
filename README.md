# Expense Tracker Application

An Expense Tracker application built using the MERN stack (MongoDB, Express.js, React, Node.js). This application helps users to track their expenses by adding, editing, and deleting transactions. The project is based on a YouTube tutorial and a GitHub source code reference.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)

## Introduction

This project is an Expense Tracker application that allows users to manage their finances by tracking their income and expenses. Users can view a list of transactions, add new transactions, and delete or edit existing ones.

## Features

- Add new income and expense transactions
- Edit existing transactions
- Delete transactions
- View a list of all transactions
- Responsive user interface


## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js

## Installation

To get a local copy up and running, follow these simple steps:

1. Clone the repository:
```
https://github.com/bhoomi1-6/Expense-Tracker.git
cd expense-tracker
```

2. Install server dependencies:
```
cd backend
npm install
```
3. Install client dependencies:
```
cd ../frontend
npm install
```

4. Create a .env file in the backend directory and add the following:
```
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
5. Start the development server:
For the backend:
```
cd backend
npm run dev
```
For the frontend:
```
cd frontend
npm start
```
Usage
Once the servers are running, you can access the application at http://localhost:3000.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
Distributed under the MIT License. See LICENSE for more information.

Acknowledgements
YouTube Tutorial: https://www.youtube.com/watch?v=i0JesTevAcA
Original GitHub Source Code: https://github.com/Maclinz/expense-tracker_fullstack
