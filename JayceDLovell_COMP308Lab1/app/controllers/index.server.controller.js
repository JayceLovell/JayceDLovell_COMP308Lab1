exports.render = function (req, res) {
    /*var email = request.body.email;
    console.log("Made by Jayce Lovell 300833478");
    if (email)
        response.redirect('/feedback', { email: email });
    else
        response.render('index');*/
    // Use the 'response' object to render the 'index' view with a 'title' and 'userFullName' properties
    res.render('index', {
        title: 'Jayce Lovell Lab02',
        userFullName: req.user ? req.user.fullName : ''
    });
}