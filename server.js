// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`assets`));

// Set Handlebars.
const exphbs = require(`express-handlebars`);
app.engine(`handlebars`, exphbs({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);

// Basic route that sends the user first to the AJAX Page
app.get(`/`, (req, res) => {
  res.render(`index`);
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
