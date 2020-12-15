const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const db = require("./models");
const app = express();
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

app.use(express.static("public"));
// Configure express-handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
app.set("view engine", "handlebars");
app.set("view engine", "handlebars");

// ROUTES

// Views Routes
app.get("/", (req, res) => {
  res.render("home");
});

const PORT = process.env.PORT || 8080;
const receiverController = require("./controllers/receiverController");
app.use(receiverController);
// API Routes
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.post("/api/test", (req, res) => {
  console.log(req.body);
});
// db.sequelize.sync({ force: true }).then(() => {
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });
});
