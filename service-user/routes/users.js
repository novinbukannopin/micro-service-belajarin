require("dotenv").config();
const express = require("express");
const router = express.Router();

const UsersHandler = require("./handler/users");
/* GET users listing. */
router.post("/register", UsersHandler.register);
router.post("/login", UsersHandler.login);
module.exports = router;
