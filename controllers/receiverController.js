const express = require("express");
const router = express.Router();

const db = require("../models");

// on receiver button is pressed on home.handlebars then it will direct to receiver.handlerbars
router.get("/receiver/new", (req, res) => {
    res.render("receiver");
   });

// when Contact is pressed on Nav bar then it will direct to contact.handlerbars
router.get("/contactus", (req, res) => {
    res.render("contact");
   });

// when About us is pressed on Nav bar then it will direct to aboutus.handlerbars
router.get("/aboutus", (req, res) => {
    res.render("aboutus");
   });
   
   
// this is when new receiver is submitted then it will retreive data from the body and entered to our database
   router.post("/api/receiver", (req, res) => {
     db.Gift.create(req.body)
       .then((newReceiver) => {
         console.log(newReceiver);
         res.json(newReceiver);
       })
       .catch((err) => {
         console.log(err);
       });
   });


   

   module.exports = router;