const viewcustomerfeedback = require('../controllers/viewcustomerfeedback.server.controller');
const feedback = require('../controllers/feedback.server.controller');

module.exports = function (app) {
    app.route('/viewcustomerfeedback')
        .get(feedback.renderFeedback)
        .post(viewcustomerfeedback.findCustomerFeedback);
};