var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;
var waitList = [{
    name: "Chris",
    partySize: 5,
    time: 3 + "pm",
    id: 1
}];
var heldTables = [{
    name: "Joe",
    partySize: 2,
    time: 7 + "pm",
    id: 1
}];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(input, response) {
    response.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(input, response) {
    response.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/table", function(input, response) {
    response.sendFile(path.join(__dirname, "tableView.html"));
});
app.get("/api/reserved", function(input, response) {
    return response.json(heldTables);
});
app.get("/api/waiting", function(input, response) {
    return response.json(waitList);
});





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});