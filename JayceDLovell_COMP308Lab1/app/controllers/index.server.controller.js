exports.render = function (request, response) {
    var email = request.body.email;
    if (email)
        response.redirect('/feedback');
    else
        response.render('index');
}