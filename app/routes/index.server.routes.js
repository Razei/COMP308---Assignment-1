module.exports = function (app) {
  //load the controller(s)
  const displayController = require("../controllers/comments.server.controller");
  const thankYouController = require("../controllers/thankYou.server.controller");
  const logoutController = require("../controllers/logout.server.controller");

  //handle the routing of get request to the route
  //by showing the login screen
  app.get("/", (req, res) => {
    // check to see if session has username (set in POST)
    if (req.session.username){
      displayController.render(req, res);
    } else {
      // display login page
      res.render("index", { loginMessage: "Please login" });
    }
  });

  // Using the POST -> REDIRECT -> GET pattern
  // https://en.wikipedia.org/wiki/Post/Redirect/Get
  app.post("/", (req, res) => {
    //get user input using request object
    //store the username in session object
    req.session.username = req.body.username;

    //redirect to get
    res.redirect('/');
  });


  app.post("/thankYou", thankYouController.render);

  //the form uses a post request to the same path ('/')
  app.get("/logout", logoutController.render);
};
