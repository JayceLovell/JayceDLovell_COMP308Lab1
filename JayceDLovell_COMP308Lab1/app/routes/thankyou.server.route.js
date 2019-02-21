const thankyou = require("../controllers/thankyou.server.controller");

module.exports = function (app) {
    app.route('/thankyou').get(thankyou.renderThankyou);
};