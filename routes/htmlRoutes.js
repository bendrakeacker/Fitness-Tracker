const path = require("path");
module.exports = function(app) {
    //return index html
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname+"/../public/index.html"));
    })

    //return exercise html
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname+"/../public/exercise.html"));
    })

    //return stats html
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname+"/../public/stats.html"));
    })
}