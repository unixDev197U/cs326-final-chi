import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors"; // Not necessary, but makes the console look good
import path from "path";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/error";
import connectDB from "./config/database";


// Load env vars
dotenv.config({
    path: './config/config.env'
});

// Connect to Database
await connectDB();

// Route files
import profiles from "./routes/profiles";

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

const PORT:number = process.env.PORT || 8080;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server and exit process
    server.close(() => process.exit(1));
});