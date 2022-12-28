const express = require("express");
const dotenv = require("dotenv")

dotenv.config({path: "backend/config/config.env"});

const app = express();

const movies = require("./routes/moviesRoutes");

app.use(express.json())
app.use("/api/v1",movies);



module. exports = app;
