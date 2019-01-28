module.exports = function (app) {
    var index = require('../controllers/index.server.controller.js');
    var feedback = require('../controllers/feedback.server.controller.js');
    var thankyou = require('../controllers/thankyou.server.controller.js');

    app.get('/', index.render);
    app.post('/', function (request, response) {
        console.log("render feedback");
        feedback.render(request, response);
        console.log("finish render feedback")
    });
    /*app.get('/feedback', function (request, response) {
        console.log("render feedback");
        var email = request.session.email;
        console.log("email on about to render feedback " + JSON.stringify(email));
        response.render('feedback', { email: email });
        console.log("finish render feedback")
    });*/
    app.post('/feedback', thankyou.render);
    //app.post('/ThankYou', thankyou.render);
}