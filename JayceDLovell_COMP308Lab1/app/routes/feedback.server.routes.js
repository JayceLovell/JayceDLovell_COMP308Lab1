module.exports = function (app) {
    var feedback = require('../controllers/feedback.server.controller.js');
    app.get('/', function (request, response) {
        feedback.render(request, response);
        console.log("test3");
    });
    console.log("test2");
}