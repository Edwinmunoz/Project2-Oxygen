// Dependencies
var path = require("path");

// Routes
module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/home.handlebars"));
  });

  app.get("/giver", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/giver.handlebars"));
  });

  app.get("/new", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/receiver.handlebars"));
  });

  app.get("/aboutus", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/aboutus.handlebars"));
  });
};
