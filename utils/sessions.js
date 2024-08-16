const pool = require('../db/prisma');
const pgStore = require("connect-pg-simple")(session);
require('dotenv/config') // process.env.VAR_NAME

// const sessionStore = new pgStore({
//   pool: pool,
//   tableName: "user_sessions",
//   createTableIfMissing: true,
// })

const session = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000*60*60*24*7 // one week
  }
})

module.exports = {session};