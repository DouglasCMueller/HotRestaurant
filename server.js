var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;
var waitList = [];
var heldTables = [];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(input, response) {
    response.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(input, response) {
    response.sendFile(path.join(__dirname, "reserve.html"));
})
app.get("/table", function(input, response) {
    response.sendFile(path.join(__dirname, "tableView.html"));
})



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});