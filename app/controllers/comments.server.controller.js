exports.render = function (req, res) {
    //make a reference to the session object
    let session = req.session;
    console.log("username in session: " + session.username);

    //show the display.ejs page and pass username to it
    res.render("display", {
        username: session.username,
    });
};