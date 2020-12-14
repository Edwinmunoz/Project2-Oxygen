const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const db = require("./models");
const app = express();

app.use(express.static("public"));

const PORT = process.env.PORT || 8080;

app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "views/layouts"),
  })
);

app.engine("hbs", exphbs());
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.set("views", "views");
app.set("view engine", "handlebars");

// ROUTES

// Views Routes
app.get("/", (req, res) => {
  res.render("home");
});

// app.use(receiverController);

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
