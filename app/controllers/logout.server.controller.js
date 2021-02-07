exports.render = function (req, res) {
    req.session.destroy((err) => {
        if (err){
            console.log(err);
        } else {
            res.session = null;
            res.redirect('/');
        }
    });
}