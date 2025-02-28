const express = require("express");
const router = express.Router();
const aiController = require("../controllers/ai.controller");

//prompt
// router.get("/get-response", aiController.getResponse);

router.post("/get-review", aiController.getReview);

module.exports = router;
