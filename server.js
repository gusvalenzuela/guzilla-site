// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`assets`))




// Basic route that sends the user first to the AJAX Page
app.get(`/`,(req,res)=>{
    res.sendFile(path.join(__dirname,`./assets/index.html`))
})
app.get("/:term", function (req, res) {
    const page = req.params.term

    switch (page) {
        case "portfolio":
            res.sendFile(path.join(__dirname, `./assets/portfolio.html`))
            break;
        case "":
            res.sendFile(path.join(__dirname, `./assets/index.html`))
            break;
        default:
            res.sendFile(path.join(__dirname, `./assets/foOhFo.html`))
            break;
    }
    // res.sendFile(path.join(__dirname, "../index.html"));
});

// app.get("/portfolio", function (req, res) {
//     res.sendFile(path.join(__dirname, "./portfolio.html"));
// });


app.listen(PORT, () => {
    console.log(`App Listening on port: ` + PORT + `...`)
})