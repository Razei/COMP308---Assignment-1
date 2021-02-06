module.exports = function (app) {
  //load the controller(s)
  var indexController = require("../controllers/index.server.controller");
  var displayController = require("../controllers/comments.server.controller");
  var thankYouController = require("../controllers/thankYou.server.controller");

  //handle the routing of get request to the route
  //by showing the login screen
  app.get("/", function (req, res) {
    //display login page
    res.render("index", { loginMessage: "Please login" });
  });

  //the form uses a post request to the same path ('/')
  app.post("/", displayController.render);

  app.post("/thankYou", thankYouController.render);
};
