const path = require("path");
const fs = require("fs");
const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "guidefinder_db"
});

module.exports = function(app) {

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
    
    app.get("/contactUs", (req, res) => {
        res.render('contactUs');
    });
        
    app.get("/profiles/:id", (req, res) => {
        const id = req.params.id
       connection.query('SELECT * FROM guideinfo INNER JOIN pictures ON guideinfo.guideID = pictures.picId WHERE guideID=?;', [id], (err, data) => {
            if (err) throw err
            res.send(data[0]);
        })
    });
    
    app.get("/guides/:id", (req, res) => {
        const id = req.params.id
        connection.query('SELECT * FROM guideinfo WHERE guideID = ?;', [id], (err, data) => {
            if (err) throw err
            if(data.length <= 0) {
                return res.json({error: "Not found"});
            }
            res.render('singleprofile', data[0]);
        });
    });
    
    app.get("/singleProfileForUsers/:id", (req, res) => {
        const id = localStorage.getItem('id')
        console.log(id);
        connection.query('SELECT * FROM guideinfo WHERE guideID = ?;', [id], (err, data) => {
            if (err) throw err
            if(data.length <= 0) {
                return res.json({error: "Not found"});
            }
            res.render('singleProfileForUsers', data[0]);
        });
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
    
    
    app.post('/newUser', (req, res) =>{
        connection.query("INSERT INTO userCredential (firstName, lastName, accountname, userpassword) VALUES (?, ?, ?,? )", 
        [req.body.firstNameUser, req.body.lastNameUser, req.body.userName, req.body.password], 
        function(err, res){
            if(err) throw err;
            console.log("new User created")
    
        });
    
    });
    
};
