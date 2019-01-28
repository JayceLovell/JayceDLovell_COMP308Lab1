exports.render = function (request, response) {
    console.log("in feedback controller");
    let email = request.body.email;
    let firstname = request.body.firstname;
    console.log("email on feedback " + JSON.stringify(email));
    console.log("firstname on feedback " + JSON.stringify(firstname));
    Document.getElementById("email").innerText = JSON.stringify(email);
    //request.body.email.innerHTML = JSON.stringify(email);
    if (firstname) {
        let email = request.body.email;
        let firstname = request.body.firstname;
        console.log("email on  leaving feedback " + JSON.stringify(email));
        console.log("firstname on leaving feedback " + JSON.stringify(firstname));
        response.render('ThankYou');
    }
    else
        response.render('feedback');
    //var email = request.body.email;
    //if (email)
        //response.redirect('/thankyou');
    //else
}