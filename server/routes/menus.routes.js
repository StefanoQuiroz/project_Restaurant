const {findMenu, findSingleMenu, createMenu, updateMenu, deleteMenu} = require("../controllers/menus.controllers");
const { authenticate } = require("../config/jwt.config");
const express = require('express');
const router = express();

router.get("/menu", findMenu);
router.get("/menu/:id", authenticate, findSingleMenu);
router.post("/menu/new", authenticate, createMenu);
router.put("/menu/update/:id", authenticate, updateMenu);
router.delete("/menu/delete/:id", authenticate, deleteMenu);

module.exports = router;


