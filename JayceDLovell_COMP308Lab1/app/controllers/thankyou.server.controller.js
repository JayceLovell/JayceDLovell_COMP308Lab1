exports.render = function (request, response) {
    var email = request.body.email;
    var session = request.session;
    session.email = email;
    if (session.email)
        response.redirect('/feedback');
    else
        response.render('index');
}