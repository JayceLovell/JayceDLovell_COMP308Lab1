exports.render = function (request, response) {
    console.log("in feedback controller");
    /*var email = request.body.email;
    var session = request.session;
    session.email = email;
    if (session.email)
        response.redirect('/Thankyou');
    else
        response.render('feedback');*/
    //var email = request.body.email;
    //if (email)
        //response.redirect('/thankyou');
    //else
        response.render('feedback');
}