const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const helmet = require("helmet");
const app = express();


// config env
dotenv.config({path: "./config/config.env"})

const errorMiddleware = require("./middlewares/error");
const options = {
    origin: 'http://localhost:3000',
    credentials: true
}

app.use(express.json());
// app.use(helmet.contentSecurityPolicy({
//     directives:{
//         defaultSrc: ["'self'", "http://localhost:3000"],
//         scriptSrc: ["'self'"],
//         styleSrc: ["'self'"],
//         imgSrc: ["'self'"],
//     }
// }));
app.use(cors(options));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// route imports
const user = require("./routes/userRoute");
const product = require("./routes/productRoute");

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     next();
// });

app.use("/api/v1", user);
app.use("/api/v1", product);


app.use("/api/v1", (req, res) => {
    res.send({
        message: "Welcome to Spark Jewellery."
    })
})

// middleware for errors
app.use(errorMiddleware);

module.exports = app; 