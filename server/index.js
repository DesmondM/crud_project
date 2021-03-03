const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

const db =mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "CRUDDatabase",
});

/* app.get("/", (req, res)=>{
    const sqlInsert = "INSERT into movie_reviews (movieName, movieReviews)  VALUES ('Sarafina', 'Too good to miss this Mnongeni classic');";
    db.query(sqlInsert, (err, result)=>{
        res.send("Hellow the world again");
    });
}); */
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/api/insert", (req, res)=>{
    const movieName = req.body.movieName
    const movieReview = req.body.movieReviews
})

app.post("/api/insert", (req,res)=>{
    const movieName = req.body.movieName
    const movieReview = req.body.movieReview
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)"
    db.query(sqlInsert, [movieName, movieReviews], (err, result)=>{
        console.log(result);
    })
})

app.listen(3010,()=>{
    console.log("running on port 3010");
});
