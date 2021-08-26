const {register, login} = require("../controllers/users.controllers");
//const {authenticate} = require("../config/jwt.config");
const express = require("express");
const router = express();

router.post("/users/new", register);
router.post("/login", login);

module.exports = router; 