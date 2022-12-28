const express = require("express");
const { getMovies, createMovies } = require("../controllers/moviesController");

const router = express.Router();


router.route("/movies").get(getMovies);
router.route("/movie/new").post(createMovies);

module.exports = router;