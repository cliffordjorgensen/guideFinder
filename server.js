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

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

app.get("/home", (req, res) => {
    connection.query('SELECT * FROM guideinfo;', (err, data) => {
        // Do not delete!
        const active = data[0]
        const restOfGuides = data.slice(1)
        res.render('home', { guideinfo: restOfGuides, active: active });
        // Do not delete!
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
    console.log(id)
    connection.query('SELECT * FROM guideinfo WHERE guideID=?;', [id], (err, data) => {
        if (err) throw err
        console.log(data);
        res.send(data[0]);
    })
});
app.get("/login", function(req, res) {
    res.render("login")
});


app.get("/loginUser", function(req, res) {
        res.render("loginUser")
    })
    //-------------------------guideLogin -----------------------------------------

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const query = "SELECT * FROM guideinfo WHERE username = ?";
    connection.query(query, username, (err, users) => {
        if (err) throw err;
        if (users.length <= 0) {
            res.json({ error: "No user with that email" });
        } else {
            const user = users[0];
            if (user.password === password) {
                res.json(user);
            }
        }
    });
});

app.put('/login/:guideId', (req, res) => {
    const id = req.params.guideId;
    const query = "UPDATE guideInfo SET name = ? WHERE id = ?;"

    connection.query('UPDATE guideinfo ')
});


//----------------------------------------------------------------------------------//

//-------------------------userLogin -----------------------------------------

app.post('/loginUser', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const query = "SELECT * FROM userCredential WHERE accountname = ?";
    connection.query(query, username, (err, users) => {
        if (err) throw err;
        if (users.length <= 0) {
            res.json({ error: "No user with that email" });
        } else {
            const user = users[0];
            if (user.userpassword === password) {
                res.json(user);
            }
        }
    });
});

app.put('/loginUser/:userId', (req, res) => {
    const id = req.params.guideId;
    const query = "UPDATE userCredential SET name = ? WHERE id = ?;"

    connection.query('UPDATE guideinfo ')
});


//----------------------------------------------------------------------------------//


// connection.query('SELECT activity, city FROM guideinfo;', (err, data) =>{

//     const response =[]
//     const tempPics = ""
//     data.forEach(function (e){
//         const temp = e.city + " " + e.activity
//         response.push(temp)
//     })

//     response.forEach(function(elem){
//         pexelsClient.search(elem, 10, 1)
//     .then(function (result) {
//         for (let i = 0; i < result.photos.length; i++) {
//             const temp = result.photos[i].url
//             // console.log(temp);
//             tempPics += temp + ","
//             if( i % 5 === 0){
//                 tempPics += "/n"

//             }

//         } 
//         console.log(tempPics);

//     }).
//     catch(function (e) {
//         // console.err(e);

//     });
//     })

//     fs.appendFile("sfpics.csv", JSON.stringify(tempPics), function (err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log("pics updated successfull");

//     });
// }); 

//     app.post('/login', function(req, res){
//         // console.log(req.body)
//         const email = req.body.email;
//         const password = req.body.password;
//         const query = connection.query('SELECT * FROM login WHERE email = ? AND password = ?', [req.body.email, req.body.password], function(err, results){
//             if (err) throw err;
//             if (results.length === 0) {
//                 res.status(401).send("invalid")
//                 // res.render()
//             } else {
//                 // res.send("valid")
//                 // console.log(results);
//                 res.render("guideProfile")
//             }
//             console.log(query.sql, results);
//         })
//     })

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT)
});