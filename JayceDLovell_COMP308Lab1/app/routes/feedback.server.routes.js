module.exports = function (app) {
    var feedback = require('../controllers/feedback.server.controller.js');
    var thankyou = require('../controllers/thankyou.server.controller.js');
    console.log("in feedback routes");
    app.post('/', function (request, response) {
        console.log("render thankyou");
        thankyou.render(request, response);
        console.log("finish render thankyou")
    });
    /*app.get('/', function (request, response) {
        feedback.render(request, response);
        console.log("test3");
    });
    console.log("test2");*/
}