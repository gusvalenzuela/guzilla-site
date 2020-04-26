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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/guzilladb", {
  useNewUrlParser: true,
});

// Basic route that sends the user first to the AJAX Page
<<<<<<< HEAD
app.get(`/`,(req,res)=>{
    res.sendFile(path.join(__dirname,`../index.html`))
})
app.get("/:term", function (req, res) {
    const page = req.params.term

    switch (page) {
        case "portfolio":
            res.sendFile(path.join(__dirname, `portfolio.html`))
            break;
        case "images":
            res.sendFile(path.join(__dirname,`images/*`))
        case "":
            res.sendFile(path.join(__dirname, `index.html`))
            break;
        default:
            res.sendFile(path.join(__dirname, `foOhFo.html`))
            break;
    }
    // res.sendFile(path.join(__dirname, "../index.html"));
=======
app.get(`/`, (req, res) => {
  res.render(`index`);
});
// Basic route that sends the user first to the AJAX Page
app.get(`/test`, (req, res) => {
  db.Project.find({})
    .sort({ dateEntered: -1 })
    .then((projects) => {
      res.render(`test`, {projects: projects, test: `testing transmission`});
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get(`/projects`, (req, res) => {
  db.Project.find({})
    .sort({ dateEntered: -1 })
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.json(err);
    });
>>>>>>> ea304d98fd04a779049f3cf4f4077e15b50588a1
});

app.post("/projects", ({ body }, res) => {

  db.Project.create(body)
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.json(err);
    });
});
app.get("/portfolio", (req, res) => {
  // sort by "field" ascending and "test" descending
  // query.sort({ field: "asc", test: -1 });
  res.render(`portfolio`)

  // db.Project.find({})
  //   .sort({ dateEntered: -1 })
  //   .then((projects) => {
  //     console.log(projects);
  //     res.render(`portfolio`, { data: projects});
  //   })
  //   .catch((err) => {
  //     res.json(err);
  //   });
});

// here just for expediency, can move out later
app.get("/:term", function (req, res) {
  const page = req.params.term;

  switch (page) {
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
