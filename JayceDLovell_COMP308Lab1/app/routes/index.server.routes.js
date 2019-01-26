module.exports = function (app) {
    var index = require('../controllers/index.server.controller.js');
    var feedback = require('../controllers/feedback.server.controller.js');

    //app.get('/', index.render);
    app.get('/', function (request, response) {
        console.log("render index");
        index.render(request, response);
        console.log("finish render index")
    });
    app.post('/', function (request, response) {
        console.log("render feedback");
        feedback.render(request, response);
        console.log("finish render feedback")
    });
    //app.post('/feedback', feedback.render);
    //app.post('/ThankYou', thankyou.render);
}