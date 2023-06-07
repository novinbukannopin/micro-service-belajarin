var express = require("express");
var router = express.Router();
const mediaHandler = require("./handler/media");

/* GET users listing. */
router.post("/", mediaHandler.create);
router.get("/", mediaHandler.get);
router.delete("/:id", mediaHandler.destroy);
// router.get("/", mediaHandler);
module.exports = router;
