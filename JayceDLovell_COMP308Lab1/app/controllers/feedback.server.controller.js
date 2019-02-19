exports.render = function (request, response) {
    console.log("Made by Jayce Lovell 300833478");
    //let email = request.body.email;
    //let firstname = request.body.firstname;
    //let lastname = request.body.lastname;
    //let comments = request.body.comments;
    //let numberOfLanguages = request.body.numberOfLanguages;
    //console.log("email on feedback " + JSON.stringify(email));
    //console.log("firstname on feedback " + JSON.stringify(firstname));
    //Document.getElementById("email").innerText = JSON.stringify(email);
    //request.body.email.innerHTML = JSON.stringify(email);
    //if (firstname && lastname) {
    //    //let email = request.body.email;
    //    //let firstname = request.body.firstname;
    //    //console.log("email on  leaving feedback " + JSON.stringify(email));
    //    //console.log("firstname on leaving feedback " + JSON.stringify(firstname));
    //    response.render('ThankYou');
    //}
    //else
        response.render('feedback', { email: email});
    //var email = request.body.email;
    //if (email)
        //response.redirect('/thankyou');
    //else
}