const notFound = (err, request, response, next) => {
    const statusCode = response.statusCode === 200 ? 500 : response.statusCode;
    response.status(statusCode);
    response.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

const errorHandler = (request, response, next) => {
    const error = new Error(`Not Found = ${request.originalUrl}`);
    response.status(404);
    next(error);
};

export { notFound, errorHandler };
