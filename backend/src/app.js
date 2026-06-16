const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contact.routes");

const app = express();

app.use(cors());
app.use(express.json());
const sessionRoutes =
  require("./routes/session.routes");

app.use(sessionRoutes);

app.use(contactRoutes);

app.get("/", (req, res) => {
  return res.json({
    message: "API Ótica Realeza funcionando 🚀",
  });
});

module.exports = app;