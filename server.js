// Dependencies
// =============================================================
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const db = require("./models");

// const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`assets`));

app.use(logger("dev"));

// Set Handlebars.
const exphbs = require(`express-handlebars`);
app.engine(`handlebars`, exphbs({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);

//Set Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/guzilladb", { useNewUrlParser: true });

// Basic route that sends the user first to the AJAX Page
app.get(`/`, (req, res) => {
  res.render(`index`);
});
// Basic route that sends the user first to the AJAX Page
app.get(`/test`, (req, res) => {
  res.render(`test`);
});

app.post("/projects", ({ body }, res) => {
  console.log(db)
  
  db.Project.create(body)
  .then(projects => {
    console.log(projects)
      res.json(projects);
    })
    .catch(err => {
      res.json(err);
    });
});


app.get("/:term", function (req, res) {
  const page = req.params.term;

  switch (page) {
    case "portfolio":
      res.render(`portfolio`);
      break;
    case "contact":
        res.render(`contact`);
      break;
    default:
        res.render(`foOhFo`);
      break;
  }
  // res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(PORT, () => {
  console.log(`App Listening @ localhost:` + PORT + `...`);
});
