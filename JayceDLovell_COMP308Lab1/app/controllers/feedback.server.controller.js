// Load the module dependencies
const Feedback = require('mongoose').model('Feedback');
const User = require('mongoose').model('User');
//const passport = require('passport');

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

exports.renderFeedback = function (req, res, next) {
    console.log("In renderfeedback controller");
    res.render('feedback', {
        title: 'Jayce Lovell Lab02',
        userFullName: req.user ? req.user.fullName : ''
    });
};
// create a new controller method that creats a new feedback
exports.feedback = function (req, res, next) {
    console.log("creating new feedback");
    if (!req.feedback) {
        // Create a new 'User' model instance
        const feedback = new Feedback(req.body);
        const message = null;

        feedback.username = req.user.username;
        console.log("saving feedback");
        feedback.save((err) => {
            if (err) {
                const message = getErrorMessage(err);

                req.flash('error', message);

               return res.redirect('/feedback');
           }
        });
    } else {
        console.log("didn't create new feedback");
        return res.redirect('/');
    }
};