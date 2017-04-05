var db = require("../models");

module.exports = function(app) {
    app.get("/", (req, res) => {
        db.Burger.findAll({}).then( (data) => {
            var hbsObject = {
                burgers: data
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });
};