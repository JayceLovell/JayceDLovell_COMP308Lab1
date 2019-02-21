// Load the module dependencies
const User = require('mongoose').model('User');

exports.renderThankyou = function (req, res) {
    console.log("In renderthankyou controller");
    res.render('ThankYou', {
        title: 'Jayce Lovell Lab02',
        userFullName: req.user ? req.user.fullName : ''
    });
    console.log("Made by Jayce Lovell 300833478");
}