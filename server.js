// Dependencies
// =============================================================
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require(`compression`)
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
app.use(compression());

// Set Handlebars.
const exphbs = require(`express-handlebars`);
app.engine(`handlebars`, exphbs({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);

//Set Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/guzilladb", {
  useNewUrlParser: true,
});

// Basic route that sends the user first to the AJAX Page
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
app.post(`/test`, (req, res) => {

  
  var projectSeed = [
    {
      title: "Password Generator",
      version: "1.2.1",
      lead: "A simple string generator with user options",
      libraries: "JS, HTML, CSS",
      description:
        'In this day and age password security is very important and having unique passwords for all accounts is best practice. In order to facilitate this practice, my password generator randomly picks from a "pool" of lower case, upper case, special case, and/or number characters and dynamically creates a string - "password" - of 8 to 128 characters long (the longer the better!). You can then take this newly created "password" and use it as you wish. Enjoy!',
      app_url: "https://gusvalenzuela.github.io/pswd-generator/",
      repo_url: "https://github.com/gusvalenzuela/pswd-generator",
      img_src: "password-gen-1.jpg",
      img_alt: "Screenshot of application",
      dateEntered: new Date(Date.now()),
      omit: false,
    },
    {
      title: "Hungry Hip-Po's",
      version: "1.11.23",
      lead:
        "A grocery list builder from recipe search. Search by cuisine, ingredient, or meal.",
      libraries: "JS, HTML, CSS",
      description: "",
      app_url: "https://gusvalenzuela.github.io/Hungry-Hippos-GRV/",
      repo_url: "https://github.com/gusvalenzuela/Hungry-Hippos-GRV",
      img_src: "hungry-hippos-1.jpg",
      img_alt: "Screenshot of application",
      dateEntered: new Date(Date.now()),
      omit: false,
    },
    {
      title: "Gooder Burger",
      version: "3.0.10",
      lead:
        "An app that dynamically uses Node.js (w/ Express & Handlebars) and mySQL to virtually create burgers and move them from uneaten to eaten lists.",
      libraries: "NodeJS, Handlebars, MySQL, CSS",
      description: `Do you get hungry? Are you human? Well if so, you probably enjoy a good burger. Allow me to introduce you to an even better burger; a Gooder Burger. From a classic cheeseburger to a meatless wonder, all burgers are welcomed to consume with Gooder Burger. I am Willy Wonka and you are Charlie. Please, go ahead and imagine the best burger your desire can conjure. Simply use your imagination, create a name for your burger, and add it to the burgers' list. After doing so, you may DEVOUR IT! That's it. All there is to it. Enjoy.`,
      app_url: "https://great-burger-app.herokuapp.com/",
      repo_url: "https://github.com/gusvalenzuela/great-burger-tracker-app",
      img_src: "gooder-burger-1.jpg",
      img_alt: "Screenshot of application",
      dateEntered: new Date(Date.now()),
      omit: false,
    },
    {
      title: "QuizDown⁉",
      version: "5.0.0",
      lead: "A timed quiz game with multiple quizzes to choose from.",
      libraries: "JS, HTML, CSS",
      description: ``,
      app_url: "https://quiz-down.herokuapp.com/",
      repo_url: "https://github.com/gusvalenzuela/quiz-game",
      img_src: "quizdown-1.jpg",
      img_alt: "Screenshot of application",
      dateEntered: new Date(Date.now()),
      omit: false,
    },
    {
      title: "artGarden",
      version: "0.33.4",
      lead: `A site where users can make requests for artworks to be made and other users can make a proposal to fulfill that request.`,
      libraries: "NodeJS, Handlebars, MySQL, CSS",
      description: `artGarden™ is for new artists who have trouble breaking into the art sphere. artGarden gives equal opportunity for paid gigs to new and established artists by allowing them to connect to potential clients through a unique bidding platform. Unlike other gig marketplace platforms, artGarden allows any registered artist to view and bid on user art commissions, giving the client the ability to set the price point while also giving lesser known artists a chance at taking on a commission that otherwise might not be accessible.`,
      app_url: "https://artgarden.herokuapp.com/",
      repo_url: "https://github.com/gusvalenzuela/art-garden-bc",
      img_src: "artgarden-1.jpg",
      img_alt: "Screenshot of application",
      dateEntered: new Date(Date.now()),
      omit: false,
    },
  ];
  
  db.Project.deleteMany({}).then(() => {
    db.Project.collection
      .insertMany(projectSeed)
      .then((data) => {
        console.log(data.result.n + " records inserted!");
        window.location.href = `/portfolio`
      })
      .catch((err) => {
        console.error(err);
        window.location.href = `/error`
      });
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
