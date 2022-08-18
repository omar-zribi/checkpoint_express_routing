const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

var objDate = new Date();
    var hours = objDate.getHours();
    var day = objDate.getDay();
    if ((hours >= 17 && hours <= 9 && (day == 0 || day == 6)) === true) {
        app.use(express.static(path.join(__dirname, "public/open")));
            console.log("Welcome");
            app.get("/", (req, res) => {
                res.sendFile(path.join(__dirname, "/public/open", "Home.html"));});
          
            }
        else {
            app.use(express.static(path.join(__dirname, "public/close")));
            console.log("It is closed now");
            app.get("/", (req, res) => {
                res.sendFile(path.join(__dirname, "/public/close", "Close.html"));});
           
            }

app.listen(PORT, (err) =>err?console.log(err):console.log(`service is runing link=http://localhost:${PORT}/`));