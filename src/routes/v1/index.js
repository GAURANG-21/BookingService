const express = require("express");
const router = express.Router();
const { BookingController } = require("../../controllers/index");

router.post("/booking", BookingController.createBooking);

module.exports = router;