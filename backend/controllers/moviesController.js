
const moviesData = require("../config/movieData.json")
const fs = require('fs');
const { json } = require("express");

exports.getMovies = (req, res) => {
    console.log("GetMovies Backend");
    try {

        const readFile = fs.readFileSync("backend/config/movieData.json")
        const data = JSON.parse(readFile);
        console.log("data: ",data);



        res.status(200).json({ success: true, data });

    } catch (error) {
        res.status(400).json({ message: "Error in get movie data." });

    }

}

exports.createMovies = (req, res) => {
    // const movie = {
    //     "id": 9,
    //     "movieName": "Life Is Good",
    //     "rating": 4,
    //     "releasedDate": "20 January 2022"
    // }
    const movieReq = req.body;
    console.log("movieReq: ", movieReq);

    fs.readFile('backend/config/movieData.json', function (err, data) {

        if (err) throw err;

        var jsonData = JSON.parse(data);
        jsonData.push(movieReq);
        console.log(jsonData);

        fs.writeFile('backend/config/movieData.json', JSON.stringify(jsonData), err => {
            if (err) throw err
            console.log("Data Added Successfully");
        })
    })


    res.status(200).json({ success: true, moviesData });
}

