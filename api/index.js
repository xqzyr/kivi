const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users.js");
const authRoute = require("./routes/auth.js");

// Loads env vars from .env file into process.env
require("dotenv").config();

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, unseUnifiedTopology: true },
    () => {
        console.log("Connected to MongoDB");
    }
);

const app = express();
app.listen(3000, () => {
    console.log("Backend server is running!");
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
