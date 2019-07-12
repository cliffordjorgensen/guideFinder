const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

<<<<<<< HEAD
=======
const mysql = require("mysql");

>>>>>>> a2b7672fc799adc92cd51eddc6e9460ec03c98c2
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "@Apartment7",
    database: "guidefinder_db"
});
<<<<<<< HEAD
var login = [{
    username: 'logansmith',
    password: 'password'
}]
=======


>>>>>>> a2b7672fc799adc92cd51eddc6e9460ec03c98c2
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
app.get("/home", (req, res) => {
    connection.query('SELECT * FROM guideinfo;', (err, data) => {
        console.log(data);
        res.render('home', { guideinfo: data });
    })
});
app.get("/profiles", (req, res) => {
    connection.query('SELECT * FROM guideinfo;', (err, data) => {
        console.log(data);
        res.render('profiles', { guideinfo: data });
    })
});
app.get("/profiles/:id", (req, res) => {
    const id = req.params.id
<<<<<<< HEAD
=======
    console.log(id)
>>>>>>> a2b7672fc799adc92cd51eddc6e9460ec03c98c2
    connection.query('SELECT * FROM guideinfo WHERE guideID=?;', [id], (err, data) => {
        if (err) throw err
        console.log(data);
        res.send(data[0]);
    })
});
<<<<<<< HEAD
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
=======

// $('.guide').on('click', function(event){
    app.get('/login', (req, res)=>{
        res.render('login');
    });
// });
    
    app.post('/login', function(req, res){
        // console.log(req.body)
        const email = req.body.email;
        const password = req.body.password;
        const query = connection.query('SELECT * FROM login WHERE email = ? AND password = ?', [req.body.email, req.body.password], function(err, results){
            if (err) throw err;
            if (results.length === 0) {
                res.status(401).send("invalid")
                // res.render()
            } else {
                // res.send("valid")
                // console.log(results);
                res.render("guideProfile")
            }
            console.log(query.sql, results);
        })
    })
>>>>>>> a2b7672fc799adc92cd51eddc6e9460ec03c98c2
app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT)});
