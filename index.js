const express = require("express");
const session = require("express-session");
const jwt = require("jsonwebtoken");

const adminAuthMiddleware = require('./middleware/authMiddleware');

const publicRoutes = require("./routes/publicRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
const port = 5000;
app.listen(port, () => console.log(`Server is listening to port ${port}...`));

app.use(session({secret:"fingerprint"}, resave=false, saveUninitialized=true));

app.use(express.json());
app.use(publicRoutes);

app.use("/admin", adminAuthMiddleware, adminRoutes);
