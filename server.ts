const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors'); // Not necessary, but makes the console look good
let path = require("path");
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/database');

// Load env vars
dotenv.config({
    path: './config/config.env'
});

// Connect to Database
connectDB();

// Route files
const profiles = require('./routes/profiles');

const app = express();

// Mount static pages
app.use(express.static(path.join(__dirname, "static")));

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount routers
app.use('/profiles', profiles);

app.use(errorHandler);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server and exit process
    server.close(() => process.exit(1));
});