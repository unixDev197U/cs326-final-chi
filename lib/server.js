"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
let path = require("path");
const errorHandler = require('./middleware_error');
const connectDB = require('./database');
// Load env vars
dotenv.config({
    path: './config/config.env'
});
// Connect to Database
connectDB();
// Route files
const profiles = require('./routes_profiles');
const app = express();
// Mount static pages
app.use(express.static(path.join(__dirname, "static")));
// Body parser
app.use(express.json());
// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// Mount routers
app.use('/profiles', profiles);
app.use(errorHandler);
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server and exit process
    server.close(() => process.exit(1));
});
