const express = require("express");
const app = express();
let  PORT = process.env.PORT || 3007;

const logger = require("morgan");
const mongoose = require("mongoose");
const mongojs = require("mongojs");
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const path = require("path");
const db = require("./models");
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
