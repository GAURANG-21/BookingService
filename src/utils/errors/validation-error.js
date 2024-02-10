const { StatusCodes } = require('http-status-codes')

class ValidationError extends Error{
    constructor(error){
        super();
        let explaination = [];
        error.errors.forEach((err)=>{
            explaination.push(err)
        });
        this.name = 'ValidationError',
        this.message = 'Not able to validate the data sent by the user',
        this.explaination = explaination,
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = ValidationError;