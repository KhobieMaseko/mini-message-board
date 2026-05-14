# Mini Message Board 💬

A modern, responsive message board application built with **Express.js, EJS, and PostgreSQL** as part of *The Odin Project*.

---

## ✨ Features

* 📱 Fully responsive design (mobile, tablet, desktop)
* 🎨 Modern UI with gradient accents
* 💬 Post and view messages
* 👤 Usernames displayed with each message
* 📅 Automatic timestamps
* 🗄️ Persistent storage with PostgreSQL (Render)
* 🎯 Clean card-based layout

---

## 🛠 Technologies Used

* **Node.js** – JavaScript runtime
* **Express.js** – Web framework
* **EJS** – Templating engine
* **PostgreSQL** – Database (hosted on Render)
* **Render** – Deployment platform

---

## 🚀 Live Demo

👉 Deployed on Render (add your link here)

---

## 💻 Local Development

### 1. Clone the repository

```bash
git clone https://github.com/KhobieMaseko/mini-message-board.git
cd mini-message-board
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file:

```env
DB_USER=your_user
DB_HOST=localhost
DB_NAME=mini_message_board
DB_PASSWORD=your_password
DB_PORT=5432
```

### 4. Create database table

Run this SQL in your local PostgreSQL:

```sql
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  user_name TEXT NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5. Start the server

```bash
npm start
```

or (with auto-reload):

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 🌐 Deployment (Render)

### ✅ Setup Summary

1. Create a **Render PostgreSQL database**
2. Copy the **Internal Database URL**
3. Add environment variables in your Web Service:

```env
DATABASE_URL=your_render_postgres_url
NODE_ENV=production
```

4. Ensure your app uses:

```js
connectionString: process.env.DATABASE_URL
```

---

### ⚠️ Important

After creating the database, you must manually create the table:

```sql
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  user_name TEXT NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📁 Project Structure

```
mini-message-board/
├── app.js
├── db/
│   ├── pool.js
│   └── queries.js
├── package.json
├── views/
│   ├── index.ejs
│   ├── form.ejs
│   └── message.ejs
```

---

## 🔄 Routes

* `GET /` → Display all messages
* `GET /new` → Show new message form
* `POST /new` → Submit new message

---

## 🧠 Learning Outcomes

This project demonstrates:

* Express routing and middleware
* EJS templating
* PostgreSQL integration
* Environment variables & production config
* Full-stack deployment (Render)
* Debugging real-world deployment issues

---

## 🔮 Future Enhancements

* ✏️ Edit & delete messages
* 🔐 User authentication
* ❤️ Message likes/reactions
* 🔄 Real-time updates
* 🔍 Search functionality
* 📄 Pagination

---

## 📄 License

MIT License

---

## 👤 Author

**Khobie Maseko**

GitHub: https://github.com/KhobieMaseko

---

## 🙏 Acknowledgments

* The Odin Project
* Render
* PostgreSQL

---

Built with ❤️ as part of The Odin Project
