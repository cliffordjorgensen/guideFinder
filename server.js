const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const app = express();
const PexelsAPI = require('pexels-api-wrapper');
const pexelsClient = new PexelsAPI("563492ad6f91700001000001e4518284000e41a3beb1ab31ef33e0a9");
const fs = require("fs");
const mysql = require("mysql");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "guidefinder_db"
});
var login = [{
    username: 'logansmith',
    password: 'password'
}]
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
app.get("/home", (req, res) => {
    connection.query('SELECT * FROM guideinfo;', (err, data) => {
        const active = data[0]
        const restOfGuides = data.slice(1)
        res.render('home', { guideinfo: restOfGuides, active: active });

    })
});
app.get("/profiles", (req, res) => {
    connection.query('SELECT * FROM guideinfo;', (err, data) => {

        res.render('profiles', { guideinfo: data });
    })
});
app.get("/profiles/:id", (req, res) => {
    const id = req.params.id
    connection.query('SELECT * FROM guideinfo WHERE guideID=?;', [id], (err, data) => {
        if (err) throw err
        res.send(data[0]);

    })
});
connection.query('SELECT activity, city FROM guideinfo;', (err, data) => {
    const response = []
    const tempPics = ""
    data.forEach(function(e) {
        const temp = e.city + " " + e.activity
        response.push(temp)
    })
    response.forEach(function(elem) {
        pexelsClient.search(elem, 10, 1)
            .then(function(result) {
                for (let i = 0; i < result.photos.length; i++) {
                    const temp = result.photos[i].url
                        // console.log(temp);
                    tempPics += temp + ","
                    if (i % 5 === 0) {
                        tempPics += "/n"
                    }
                }
                console.log(tempPics);
            }).
        catch(function(e) {
            // console.err(e);
        });
    })
    fs.appendFile("sfpics.csv", JSON.stringify(tempPics), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("pics updated successfull");
    });
});
app.get('/login', (req, res) => {
    res.render('login', { login });
});
app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT)
});