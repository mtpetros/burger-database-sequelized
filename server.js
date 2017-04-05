//This is where the middleware processing and routing magic takes place

var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var app = express();

//various middlewares
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

//handlebars middleware

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//routing
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

var db = require("./models");
//db sync (inserts some default data that gets recreated after each sync) and port listener
db.sequelize.sync({ force: true }).then(function () {
    db.Burger.bulkCreate([
        {burger_name: 'tasty buns'},
        {burger_name: 'fatty patty'},
        {burger_name: 'the double baconator'}
    ]).then( (data) => {
        app.listen(process.env.PORT || 3000, function(){
          console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
        });
    });    
});



