﻿// Load the module dependencies
const User = require('mongoose').model('User');
const Feedback = require('mongoose').model('Feedback');
const passport = require('passport');

const getErrorMessage = function (err) {
    // Define the error message variable
    const message = '';

    // If an internal MongoDB error occurs get the error message
    if (err.code) {
        switch (err.code) {
            // If a unique index error occurs set the message error
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            // If a general error occurs set the message error
            default:
                message = 'Something went wrong';
        }
    } else {
        // Grab the first error message from a list of possible errors
        for (const errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }

    // Return the message error
    return message;
}

exports.renderFeedback = function (request, response) {
    console.log("In feedback controller");
    //if (!request.user) {
    //    return response.redirect('/');
    //}
    //else {
    response.render('feedback', {
        title: 'Feedback'
    });
    //}
};

// Create a new controller method for signing out
exports.signout = function (req, res) {
        // Use the Passport 'logout' method to logout
        req.logout();

        // Redirect the user back to the main application page
        res.redirect('/');
};