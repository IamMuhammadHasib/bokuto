const express = require("express");
const session = require("express-session");
const jwt = require("jsonwebtoken");

const app = express();
const port = 5000;
app.listen(port, () => console.log(`Server is listening to port ${port}...`));
app.use(session({secret:"fingerprint"}, resave=false, saveUninitialized=true));


