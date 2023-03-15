const express = require('express');

const router = express.Router();
const Product = require('../models/Product');

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
  const product = new Product({
    image:req.body.image,
    alt:req.body.alt,
    blogHeader:req.body.blogHeader,
    html:req.body.html,
    blogExplain:req.body.blogExplain

});
  product.save();
  res.json(product);
});

router.put("/:id", (req, res) => {
  Product.findByIdAndUpdate(req.params.id, {
    image:req.body.image,
    alt:req.body.alt,
    blogHeader:req.body.blogHeader,
    html:req.body.html,
    blogExplain:req.body.blogExplain
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



