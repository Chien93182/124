"use strict";
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "ChienDev",
  password: "123",
  database: "api",
});

module.exports = db;
