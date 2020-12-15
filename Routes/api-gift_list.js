
const express = require("express");
const app = express.Router();
const db = require("../models");

module.exports = function (app) {
    //GET route for getting all of the giftlist data
    app.get("/gift_list/", function (req, res) {
       db.Gift.findAll({})
            .then(function (dbgift) {
                 res.json(dbgift);
            });
  });

  app.get("receiver/new"),(req,res)=> {
      res.render("receiver")
  }

      // POST route for saving a new gift
      //app.post("/api/gift_list", function (req, res) {
        //db.Gifts.create({
            //Giver: req.body.Giver,
            //Receiver: req.body.Receiver,
    //         Address: req.body.Address,
    //         Email: req.body.Email,
    //         Gift1: req.body.Gift1,
    //         Gift2: req.body.Gift2,
    //         Gift3: req.body.Gift3,
    //     })
    //     .then(function (Giver) {
    //         res.json(dbGift);
    //     });
    // });

     // DELETE route for deleting gifts
     app.delete("/gift_list/:id", function (req, res) {
        db.gifts_list.destroy({where: {id: req.params.id}})
        .then(function (dbGift) {
            res.json(dbGift);
        });
    });

    // PUT route for updating gifts
    app.put("/gifts_list/:id", function (req, res) {   
        console.log(req.body)       
        db.giftsList.update(req.body, { where: { id: req.params.id }})
        .then(function (dbGift) {
            res.json(dbGift);
        })
    });

}

module.export = app;