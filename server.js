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
        console.log(data[0].latitude);
        console.log(data[0].longitude);
        // Do not delete!
        const active = data[0]
        const restOfGuides = data.slice(1)
        res.render('home', { guideinfo: restOfGuides, active: active });
        // Do not delete!
    })
});
app.get("/profiles", (req, res) => {
    connection.query('SELECT * FROM guideinfo;', (err, data) => {

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

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT)
});

//-------------------------userLogin -----------------------------------------