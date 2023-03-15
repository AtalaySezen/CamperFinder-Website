
const express = require('express');
const placesRouter = require("./routes/places"); //places.js importu.

const mongoose = require("mongoose");
require("dotenv/config");

// require("dotenv/config");
// process.env.DATA
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

//Database infos
const databaseName = "newblogs";
const username = "admin";
const password = "ykdNdgsgpkkCefuW";

mongoose.connect(`mongodb+srv://${username}:${password}@cluster1.esp8gv8.mongodb.net/${databaseName}?retryWrites=true&w=majority`,
    (e) => {
        if (e) {
            console.log(e); //Bağlanamaz ise hatayı yazar
        } else {
            console.log("connected to database")
        }
    }
);
let isLoggedIn = true;
app.get("/", (req, res) => {
    if (!isLoggedIn) { //logged check
        res.send('You must logged in to view in this page');
    } else {

        res.send("Server Çalıştı Tebrikler")
    }
});


app.use('/node2/node3', placesRouter); //products yazan kısım url yolu


const server = app.listen(0, function () {
    console.log(`Server çalıştı on http://localhost:${server.address().port}`);
})

//


//Fetch Products GET
//Yeni bir product oluşturma kısmı: POST
//GET PRODUCT GET
//Güncelleme Update Place
//Delete Product DELETE
