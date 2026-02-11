const express = require("express");
const path = require("path");
const app = express();

// Set up EJS as the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Sample messages array
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

app.post("/new", (req, res) => {
  const { messageText, messageUser } = req.body;
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  });
  res.redirect("/");
});

// Message details route
app.get("/message/:id", (req, res) => {
  const messageId = parseInt(req.params.id);

  if (messageId >= 0 && messageId < messages.length) {
    res.render("message", {
      title: "Message Details",
      message: messages[messageId],
      messageId: messageId
    });
  } else {
    res.status(404).send("Message not found");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Mini Message Board running on port ${PORT}!`);
});

module.exports = app;
