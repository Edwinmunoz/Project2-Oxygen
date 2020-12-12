const db = require("../models");

module.exports = function (app) {
    //GET route for getting all of the giftlist data
    app.get("/gift_list/", function (req, res) {
       db.cardsList.findAll({})
            .then(function (dbgift) {
                 res.json(dbgift);
            });
  });

      // POST route for saving a new gift
      app.post("/gift_list", function (req, res) {
        db.giftsList.create({
            Giver: req.body.Giver,
            Receiver: req.body.Receiver,
            Address: req.body.Address,
            Email: req.body.Email,
            Gift1: req.body.Gift1,
            Gift2: req.body.Gift2,
            Gift3: req.body.Gift3,
        })
        .then(function (dbGift) {
            res.json(dbGift);
        });
    });

     // DELETE route for deleting gifts
     app.delete("/gift_list/:id", function (req, res) {
        db.giftsList.destroy({where: {id: req.params.id}})
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