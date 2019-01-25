exports.render = function (request, response) {
    var email = request.email;
    var session = request.session;
    session.email = email;
    if (session.email)
        response.redirect('/ThankYou');
    else
        response.render('feedback');
}