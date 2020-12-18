const express = require("express");
const router = express.Router();

const db = require("../models");

//------------------------------------------------------------------
// list of all records that does not have Giver, this will use giver-list handlebar
// this will handle Delect and Edit function from Giver
router.get("/list", function (req, res) {
  db.Gift.findAll({
    //This will filed all data without Giver Name
    where: {
      Giver: null,
    },
    order: [["id", "desc"]],
  }).then(function (results) {
    res.render("giver", { gifts: results });
  });
});
//--------------------------------------------------------------

// 1) post the new receiver created and intertit to the database
router.post("/api/receiver", (req, res) => {
  db.Gift.create(req.body)
    .then((newReceiver) => {
      console.log(newReceiver);
      res.json(newReceiver);
      console.log(newReceiver.id);
    })
    .catch((err) => {
      console.log(err);
    });
});

// when About us is pressed on Nav bar then it will direct to aboutus.handlerbars
router.get("/aboutus", (req, res) => {
  res.render("aboutus");
});

router.get("/contactus", (req, res) => {
  res.render("contact");
});

//this will find the record Giver want to add giver information
//this will use id parames from updateGiver.js submit click
//this will use giver-update handlebar
router.get("/giver/:id", (req, res) => {
  db.Gift.findOne({
    where: {
      id: req.params.id,
    },
  }).then((foundReceiver) => {
    console.log(foundReceiver.email);
    res.render("giver-update", {
      Email: foundReceiver.Email,
      Receiver: foundReceiver.Receiver,
      Giver: foundReceiver.Giver,
      Address: foundReceiver.Address,
      Gift1: foundReceiver.Gift1,
      Gift2: foundReceiver.Gift2,
      Gift3: foundReceiver.Gift3,
      id: foundReceiver.id,
      Story: foundReceiver.Story,
    });
  });
});
//------------------------------------------------------------------
//this will find the record user want to update receiver info
//this will use id parames from updateReceiver.js submit click
//this will use receiver-update handlebar
router.get("/receiver/:id", (req, res) => {
  db.Gift.findOne({
    where: {
      id: req.params.id,
    },
  }).then((foundReceiver) => {
    console.log(foundReceiver.email);
    res.render("receiver-update", {
      Email: foundReceiver.Email,
      Receiver: foundReceiver.Receiver,
      Giver: foundReceiver.Giver,
      Address: foundReceiver.Address,
      Gift1: foundReceiver.Gift1,
      Gift2: foundReceiver.Gift2,
      Gift3: foundReceiver.Gift3,
      id: foundReceiver.id,
      Story: foundReceiver.Story,
    });
  });
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

//-------------------------------------------------------------------
// this will delete record from database when Delect button is clicked from /new
router.delete("/api/receiver/:id", (req, res) => {
  db.Gift.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

//---------------------------------------------------------------------
// 2) This will show all data and sorted by Id - lates will post to top

router.get("/new", (req, res) => {
  db.Gift.findAll({
    order: [["id", "desc"]],
  }).then(function (results) {
    res.render("receiver", { gifts: results });
  });
});

//-------------------------------------------------------------------------
// this will direct to about us handlebar when about us is clicked on nav bar
router.get("/aboutus", (req, res) => {
  res.render("aboutus");
});
// this will direct to contact handlebar when about us is clicked on nav bar
router.get("/contactus", (req, res) => {
  res.render("contact");
});

//-------------------------------------------------------------------------

module.exports = router;
