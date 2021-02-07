exports.render = function (req, res) {
    if (req.session.username){
        //get user input using request object
        const email = req.body.email;
        const courseCode = req.body.courseCode;
        const courseName = req.body.courseName;
        const comments = req.body.comments;

        //make a reference to the session object
        let session = req.session;

        //store the username in session object
        session = Object.assign(session, {email, courseCode, courseName, comments});
        console.log("username in session: " + session.username);
    
        //show the display.ejs page and pass username to it
        res.render("thankYou", {email, courseCode, courseName, comments});
    } else {
        res.render("index", { loginMessage: "Please login" });
    }
};