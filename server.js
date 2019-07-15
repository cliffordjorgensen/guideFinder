const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routing/htmlRoutes")(app);

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
                res.json(user)
            }
        }
    });
});

app.put('/login', function (req, res) {
    console.dir(req.body)
    let query = 'INSERT INTO guideinfo SET ?';
    //  'INSERT INTO guideinfo (name, photolink, age, activity, city, yearsofExperience, descriptionActivity, username, password ) VALUES (?)';
    connection.query(query, { name: req.body.name, photolink: req.body.photolink, age: req.body.age, activity: null, city: req.body.city, yearsofExperience: null, descriptionActivity: null, username: req.body.username, password: req.body.password }, function (err, result) {
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
})

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT)
});

