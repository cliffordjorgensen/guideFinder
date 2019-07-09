var express = require("express");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/mainController.js");

// app.use(routes);

var icecreams = [
    { name: 'vanilla', photolink: 10, age: 3, activity: 'nothing' },
    { name: 'chocolate', photolink: 4, age: 8, activity: 'something' },
    { name: 'banana', photolink: 1, age: 1, activity: 'whatever' },
    { name: 'greentea', photolink: 5, age: 7, activity: 'hello' },
    { name: 'jawbreakers', photolink: 6, age: 2, activity: 'still nothing' },
];

app.get("/", function(req, res) {
    res.render('index', { icecreams })
});

app.get("/home", function(req, res) {
    res.render('home', { icecreams })
});

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});