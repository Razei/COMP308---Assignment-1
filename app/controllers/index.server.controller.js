exports.displayInfo = function (req, res) {
  //get user input using request object
  var username = req.body.username;
  //make a reference to the session object
  var session = req.session;
  //store the username in session object
  session.username = username;
  console.log("username in session: " + session.username);
  //show the display.ejs page and pass username to it
  res.render("display", {
    username: username,
  });
};
