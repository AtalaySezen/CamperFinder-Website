const express = require('express');
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");

const router = express.Router();
const Product = require('../models/Product');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'camperfinderinfo@gmail.com',
    pass: 'tqqyowxjcwkevdha'
  },
});


router.get("/", (req, res) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {

  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function (err, fields) {
    const mail = {
      to: ['camperfinderinfo@gmail.com'], // receiver email,
      subject: req.body.subject,
      html: `
      <p>Ad Soyad:${req.body.nameSurname}</p>
      <p>E-Posta Adresi:${req.body.sender}</p>
      <p>Konu:${req.body.type}</p>
      <p>Mesaj:${req.body.message}</p>
      `,
      amp: `<!doctype html>
      <html ⚡4email>
        <head>
          <meta charset="utf-8">
          <style amp4email-boilerplate>body{visibility:hidden}</style>
          <script async src="https://cdn.ampproject.org/v0.js"></script>
          <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
        </head>
        <body>
          <p>Image: <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
          <p>GIF (requires "amp-anim" script in header):<br/>
            <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
        </body>
      </html>`


    };
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send("Something went wrong.");
      } else {
        res.status(200).send("Email successfully sent to recipient!");
      }
    });
  });

  const product = new Product({
    nameSurname: req.body.nameSurname,
    subject: req.body.subject,
    sender: req.body.sender,
    status: req.body.status,
    message: req.body.message,
    note: req.body.note,
    type: req.body.type
  });
  product.save();
  res.json(product);
});




router.put("/:id", (req, res) => {
  Product.findByIdAndUpdate(req.params.id, {
    nameSurname: req.body.nameSurname,
    subject: req.body.subject,
    sender: req.body.sender,
    status: req.body.status,
    message: req.body.message,
    note: req.body.note,
    type: req.body.type
  })
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.json(err);
    });
});


module.exports = router;




