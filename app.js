// app.jsode
const express = require("express");
const session = require("express-session");
const passport = require("passport");
require('dotenv/config'); // process.env.VAR_NAME
const session = require('./utils/sessions');
const app = express();
const prisma = require('./db/prisma')

//passport auth
// require("./utils/passport")
app.use(session);
require('./config/passport');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})