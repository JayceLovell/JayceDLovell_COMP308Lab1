exports.render = function (request, response) {
    var email = request.body.email;
    console.log("Made by Jayce Lovell 300833478");
    if (email)
        response.redirect('/feedback');
    else
        response.render('index');
}