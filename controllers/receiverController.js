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
// router.get("/api/receivers", function(req, res) {
//   db.Gift.findAll({
//     include: [db.Post]
//   }).then(function(newReceiver) {
//     res.json(newReceiver);
//   });
// });

router.post("/api/receivers", (req, res) => {
  db.Gift.create(req.body)
    .then((newReceiver) => {
      console.log(newReceiver);
      res.json(newReceiver);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/api/receivers", function (req, res) {});

router.delete("api/receivers/:id", function (req, res) {
  db.gifts_list
    .destroy({ where: { id: req.params.id } })
    .then(function (dbGift) {
      res.json(dbGift);
    });
});

// router.put("api/updateReciever/:id", function (req, res) {
//   console.log(req.body)
//   db.giftsList.update(req.body, { where: { id: req.params.id }})
//   .then(function (updateReciever) {
//       res.json(updateReciever);
//   })
// });

router.get("/giver", (req, res) => {
  res.render("giver");
});

// this is when new receiver is submitted then it will retreive data from the body and entered to our database

module.exports = router;
