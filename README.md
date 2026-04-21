# 🚀 API Testing Practice - Node.js + Express

## 📌 Project Overview

This project is a simple **REST API** built using Node.js and Express.js.
It demonstrates CRUD operations (Create, Read, Update, Delete) using JSON data.

This project is designed for:

* Learning API development
* Practicing API testing using Postman
* Understanding backend basics for QA / Automation roles

---

## 🛠 Tech Stack

* Node.js
* Express.js
* JSON (Data format)
* Postman (API Testing)

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Sangeetayadav10/api-testing-practice-nodejs-express-JSON.git
cd api-testing-practice-nodejs-express-JSON
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
node server.js
```

Server will start at:

```
http://localhost:3000
```

---

## 📂 Project Structure

```
my-api/
│── node_modules/
│── package.json
│── package-lock.json
│── server.js
│── README.md
```

---

## 🔗 API Endpoints

### ✅ GET All Users

* **URL:** `/users`
* **Method:** GET

---

### ✅ POST Create User

* **URL:** `/users`
* **Method:** POST
* **Body:**

```json
{
  "name": "New User"
}
```

---

### ✅ PUT Update User

* **URL:** `/users/:id`
* **Method:** PUT
* **Body:**

```json
{
  "name": "Updated Name"
}
```

---

### ✅ DELETE User

* **URL:** `/users/:id`
* **Method:** DELETE

---

## 📌 Sample Data

```json
[
  { "id": 1, "name": "Sangeeta" },
  { "id": 2, "name": "Rahul" }
]
```

---

## ⚠️ Error Handling

* 400 → Bad Request (Missing name)
* 404 → User Not Found

---

## 🧪 API Testing

You can test all APIs using Postman:

1. Open Postman
2. Select request type (GET/POST/PUT/DELETE)
3. Enter URL: `http://localhost:3000/users`
4. Send request

---

## 📈 Features

* REST API implementation
* CRUD operations
* JSON request/response handling
* Basic validation and error handling

---

## 🚀 Future Improvements

* Add PATCH API
* Connect with database (MongoDB)
* Add authentication (JWT)
* Improve project structure (MVC pattern)

---

## 👩‍💻 Author

**Sangeeta Yadav**

---

## ⭐ Acknowledgement

This project is created for learning and practicing backend API development and testing.
