const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const catchAsyncError = require("../middlewares/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");

// exports.authUser = catchAsyncError(async (req, res, next) => {

//     const authHeader = req.headers.Authorization;
//     if(!authHeader) {
//         return next(new ErrorHandler("Please login to access this resource.", 401));
//     }
    
//     const [ bearer, token ] = authHeader.split(" ");
//     if(bearer !== "Bearer" || !token) {
//         return next(new ErrorHandler("Please login to access this resource.", 401));
//     }

//     const decodedData = jwt.verify(token, process.env.JWT_SECRET);
//     if(!decodedData) {
//         return next(new ErrorHandler("Please login to access this resource.", 401));
//     }

//     req.user = await User.findById(decodedData._id);

//     next();
// });

exports.authUser = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;

    if(!token) {
        return next(new ErrorHandler("Please login to access this resource.", 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decodedData._id);
    
    next();
});

exports.authRole = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`${req.user.role} is not allowed to access this resource.`, 403));
        }

        next();
    }
}