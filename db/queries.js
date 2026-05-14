const pool = require("./pool");

// Get all messages
async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages ORDER BY added DESC");
  return rows;
}

// Add a new message
async function addMessage(text, user) {
  await pool.query(
    "INSERT INTO messages (text, user_name, added) VALUES ($1, $2, NOW())",
    [text, user]
  );
}

// Get one message by ID
async function getMessageById(id) {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE id = $1",
    [id]
  );
  return rows[0];
}

module.exports = {
  getAllMessages,
  addMessage,
  getMessageById,
};
