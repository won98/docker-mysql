const express = require("express");
const { TextController: controller } = require("../controller");
const router = express.Router();

router.post("/post", controller.Post);

module.exports = router;
