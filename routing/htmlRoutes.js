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
        connection.query('SELECT * FROM guideinfo INNER JOIN pictures ON guideinfo.guideID = pictures.picId WHERE guideID=?;', [id], (err, data) => {
            if (err) throw err
            if (data.length <= 0) {
                return res.json({ error: "Not found" });
            }
            res.render('singleprofile', data[0]);
        });
    });

    app.get("/singleProfileForUsers/:id", (req, res) => {
        const id = req.params.id
        connection.query('SELECT * FROM guideinfo INNER JOIN pictures ON guideinfo.guideID = pictures.picId WHERE guideID=?;', [id], (err, data) => {
            if (err) throw err
            if (data.length <= 0) {
                return res.json({ error: "Not found" });
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

    app.get("/payment", function(req, res) {
        res.render("payment")
    })

    //-------------------------guideLogin -----------------------------------------

    app.post('/login', (req, res) => {
        console.log("app.post/login", req.body);
        const username = req.body.username;
        const password = req.body.password;
        const query = "SELECT * FROM guideinfo WHERE username = ? AND password = ?";
        connection.query(query, [username, password], (err, users) => {
            if (err) throw err;
            // console.log('these are+',users)
            if (users.length <= 0) {
                res.json({ error: "No user with that email" });
            } else {
                const user = users[0];
                if (user.password === password) {
                    res.json(user)
                }
            }
        });
    });

    app.put('/login', function(req, res) {
        let query = 'INSERT INTO guideinfo SET ?';
        //  'INSERT INTO guideinfo (name, photolink, age, activity, city, yearsofExperience, descriptionActivity, username, password ) VALUES (?)';
        connection.query(query, { name: req.body.name, photolink: req.body.photolink, age: req.body.age, activity: null, city: req.body.city, yearsofExperience: null, descriptionActivity: null, username: req.body.username, password: req.body.password }, function(err, result) {
            if (err) throw err;
            else {
                let query = "SELECT * FROM guideinfo WHERE username = ? AND password = ?";
                connection.query(query, [req.body.username, req.body.password], (err, users) => {
                    if (err) throw err;

                    if (users.length <= 0) {
                        res.json({ error: "No user with that email" });
                    } else {
                        const user = users[0];
                        res.json(user)
                    }
                });
            }
        })
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

    // app.put('/loginUser/:userId', (req, res) => {
    //     const id = req.params.guideId;
    //     const query = "UPDATE userCredential SET name = ? WHERE id = ?;"

    //     connection.query('UPDATE guideinfo ')
    // });


    app.post('/newUser', (req, res) => {
        connection.query("INSERT INTO userCredential (firstName, lastName, accountname, userpassword) VALUES (?, ?, ?,? )", [req.body.firstNameUser, req.body.lastNameUser, req.body.userName, req.body.password],
            function(err, res) {
                if (err) throw err;
                console.log("new User created")

            });

    });

    //-------map----------------------------------///

    app.get("/home", (req, res) => {
        connection.query('SELECT * FROM guideinfo;', (err, data) => {
            console.log(data[0].latitude);
            console.log(data[0].longitude);
            // Do not delete!
            const active = data[0]
            const restOfGuides = data.slice(1)
            res.render('home', { guideinfo: restOfGuides, active: active });
            // Do not delete!
        })
    });

};