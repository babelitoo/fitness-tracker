const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require('compression');
const db = require("./models");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// compress all responses
app.use(compression())

//connect to routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", { useNewUrlParser: true });

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});