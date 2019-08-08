const express = require("express");
const connectDB = require("./config/db.js");
const app = express();

//Connect to database
connectDB();

app.get("/", (req, res) => res.send("API RUNNING"));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));