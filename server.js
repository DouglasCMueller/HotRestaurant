var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;
var waitList = [{
    name: "Chris",
    phone: "629 - 900 - 2453",
    email: "blahblah@whatever.com",
    id: 1
}];
var heldTables = [{
    name: "Joe",
    phone: "629 - 900 - 2453",
    email: "blahblah@whatever.com",
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
app.get("/api/heldtable", function(input, response) {
    return response.json(heldTables);
});
app.get("/api/waiting", function(input, response) {
    return response.json(waitList);
});
app.post("/api/reserved", function(input, response) {

    if (heldTables.length > 5) {
        waitList.push(input.body);

        console.log("You are on our wait list we will let you know when a table frees up");

    } else {
        heldTables.push(input.body);
        console.log("Congrates we cant wait to see you");
    }
    response.json({
        response: "hi"
    });

})





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});