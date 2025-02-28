const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const app = express(); //express call
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello ji");
});

//any prompt comes with /ai, it goes to aiRoutes
app.use("/ai", aiRoutes);

module.exports = app;
