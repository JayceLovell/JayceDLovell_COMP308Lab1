const feedback = require('../controllers/feedback.server.controller');
// Define the routes module' method
module.exports = function (app) {
    console.log('in feedback route');
    app.route('/feedback')
        .get(feedback.render)
        .post('/Thankyou');

};