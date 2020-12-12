// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  
  app.get("/giver", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/giver.html"));
  });

  
  app.get("/receiver", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/receiver.html"));
  });


};