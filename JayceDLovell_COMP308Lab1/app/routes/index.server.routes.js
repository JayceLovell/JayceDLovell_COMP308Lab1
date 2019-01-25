module.exports = function (app) {
    var index = require('../controllers/index.server.controller.js');
    var feedback = require('../controllers/feedback.server.controller.js');
    var thankyou = require('../controllers/thankyou.server.controller.js');

    //app.get('/', index.render);
    app.get('/', function (request, response) {
        index.render(request, response);
        console.log("test");
    });
    app.post('/', function (request, response) {
        console.log("test1");
        feedback.render(request,response);
    });
    //app.post('/feedback', feedback.render);
    //app.post('/ThankYou', thankyou.render);
}