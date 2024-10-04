const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const adminAuthMiddleware = require("./middleware/authMiddleware");

const publicRoutes = require("./routes/publicRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
const port = 5000;
app.listen(port, () => console.log(`Server is listening to port ${port}...`));

const uri = "mongodb://localhost:27017/bokuto-db";
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB connection error: ", err);
  });

app.use(
  session({
    secret: "fingerprint",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(publicRoutes);
app.use(bodyParser.json());

app.use("/admin", adminAuthMiddleware, adminRoutes);
