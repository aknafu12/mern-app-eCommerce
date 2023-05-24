// Error handler class
class ErrorHandler extends Error{
    constructor(message, statusCode) {
        super(message);
        // this.name = 'ErrorHandler';
        this.statusCode = statusCode;
        // this.message = message;
        // this.path = path;
        // this.stack = error.stack;
        // this.error = error;
        Error.captureStackTrace(this, this.constructor)
        }
        }
        // Export ErrorHandler class
        module.exports = ErrorHandler;

            