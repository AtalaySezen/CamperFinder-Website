
const express = require('express');
const placesRouter = require("./routes/places"); //places.js importu.

const mongoose = require("mongoose");
require("dotenv/config");

require("dotenv/config");
process.env.DATA
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

//Database infos
const databaseName = "mailservice";
const username = "admin";

mongoose.connect(`mongodb+srv://admin:${process.env.PASSWORD}@cluster1.esp8gv8.mongodb.net/?retryWrites=true&w=majority`,
    (e) => {
        if (e) {
            console.log(e); //Bağlanamaz ise hatayı yazar
            console.log("db bağlanmadı ")
            console.log(process.env.USERNAME, "username")
            console.log(process.env.PASSWORD, "password");

        } else {
            console.log("connected to database")
        }
    }
);
let isLoggedIn = true;
app.get("/mail1", (req, res) => {
    if (!isLoggedIn) { //logged check
        res.send('You must logged in to view in this page');
    } else {

        res.send("Server Çalıştı Tebrikler")
    }
});


app.use('/mail1/mail', placesRouter); //products yazan kısım url yolu


const server = app.listen(0, function () {
    console.log(`Server çalıştı on http://localhost:${server.address().port}`);
})

//

