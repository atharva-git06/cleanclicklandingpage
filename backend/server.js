require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require("cors");
const passport = require('passport');
require('./utils/passport');



const app = express();
const router = require('./router/auth-router');
const messageRouter = require('./router/message-router')
const connectDb = require('./utils/db');
const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

// Add session middleware - needed for Passport
app.use(session({
  secret: process.env.SESSION_SECRET,  // put this in your .env as SESSION_SECRET
  resave: false,
  saveUninitialized: true
}));

// Initialize Passport and session support
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", router);
app.use("/api/messages", messageRouter);


const port = 5000;
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`server running at ${port}`);
  });
});