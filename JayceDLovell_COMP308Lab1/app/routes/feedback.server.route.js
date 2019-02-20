const feedback = require('../controllers/feedback.server.controller');
// Define the routes module' method
module.exports = function (app) {
    app.route('/feedback').get(feedback.renderFeedback);

};