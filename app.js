require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./db/queries");

const app = express();

// View engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));

/* -------------------------
   HOME PAGE
-------------------------- */
app.get("/", async (req, res) => {
  const messages = await db.getAllMessages();

  res.render("index", {
    title: "Mini Message Board",
    messages,
  });
});

/* -------------------------
   NEW MESSAGE FORM (GET)
-------------------------- */
app.get("/new", (req, res) => {
  res.render("form", {
    title: "New Message",
    errors: [],
    old: {},
  });
});

/* -------------------------
   CREATE MESSAGE (POST)
-------------------------- */
app.post("/new", async (req, res) => {
  const { messageUser, messageText } = req.body;

  const errors = [];

  // Validation
  if (!messageUser || messageUser.trim() === "") {
    errors.push("Name is required");
  }

  if (!messageText || messageText.trim() === "") {
    errors.push("Message cannot be empty");
  }

  if (messageText && messageText.length > 300) {
    errors.push("Message must be less than 300 characters");
  }

  // If errors → re-render form
  if (errors.length > 0) {
    return res.render("form", {
      title: "New Message",
      errors,
      old: {
        messageUser,
        messageText,
      },
    });
  }

  // Save to DB
  await db.addMessage(messageText, messageUser);

  res.redirect("/");
});

/* -------------------------
   MESSAGE DETAILS
-------------------------- */
app.get("/message/:id", async (req, res) => {
  const messageId = parseInt(req.params.id);

  const message = await db.getMessageById(messageId);

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("message", {
    title: "Message Details",
    message,
    messageId,
  });
});

/* -------------------------
   START SERVER
-------------------------- */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Mini Message Board running on port ${PORT}!`);
});

module.exports = app;
