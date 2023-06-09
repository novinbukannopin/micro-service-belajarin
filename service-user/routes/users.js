require("dotenv").config();
const express = require("express");
const router = express.Router();

const UsersHandler = require("./handler/users");
/* GET users listing. */
router.post("/register", UsersHandler.register);
router.post("/login", UsersHandler.login);
router.post("/logout", UsersHandler.logout);
router.put("/:id", UsersHandler.update);
router.get("/:id", UsersHandler.getUser);
router.get("/", UsersHandler.getUsers);
module.exports = router;
