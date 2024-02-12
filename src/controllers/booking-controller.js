const { BookingService } = require("../services");
const bookingService = new BookingService();
const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils/errors");

const createBooking = async (req, res) => {
  try {
    const response = await bookingService.createBooking(req.body);
    // console.log("Response from Booking Controller", response);
    return res.json({
      data: response,
      message: "Successfully created booking",
      success: true,
      err: {},
    });
  } catch (error) {
    // console.log("Error from Booking Controller", error);
    return res.json({
      data: {},
      message: error.message,
      success: false,
      err: error.explaination,
    });
  }
};

module.exports = {
  createBooking,
};
