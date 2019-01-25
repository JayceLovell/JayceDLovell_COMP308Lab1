module.exports = function (app) {
    var index = require('../controllers/index.server.controller');
    var feedback = require('../controllers/feedback.server.controller.js');
    var thankyou = require('../controllers/thankyou.server.controller.js');

    app.get('/', index.render);
    app.get('/', function (request, response) {
    index.render(request, response);
});

app.get('/feedback', feedback.render);
app.post('feedback', thankyou.render);
}