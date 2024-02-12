const { Bookings } = require("../models/index");
const { AppError, ValidationError } = require("../utils/errors/index");
const { StatusCodes } = require("http-status-codes");

class BookingRepository {
  async createBooking(data) {
    try {
      const booking = await Bookings.create(data);
      return booking;
    } catch (error) {
      if (error.name == "SequelizeValidationError") {
        throw new ValidationError(error);
      }
      throw new AppError(
        "RepositoryError",
        "Cannot create Booking",
        "There was some issue while creating the booking. Please try again later.",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(bookingId, data) {
    try {
      // await Booking.update(data, {
      //   where: {
      //     id: bookingId,
      //   },
      // });
      
      const booking = await Bookings.findByPk(bookingId);
      if(data.status){
        booking.status = data.status
      }

      // await booking.save();
      return booking
    } catch (error) {
      throw new AppError(
        "RepositoryError",
        "Cannot update Booking",
        "There was some issue while updating the booking. Please try again later.",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = BookingRepository;
