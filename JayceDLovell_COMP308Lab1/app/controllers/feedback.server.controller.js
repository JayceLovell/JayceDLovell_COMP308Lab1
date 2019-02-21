// Load the module dependencies
const Feedback = require('mongoose').model('Feedback');
const User = require('mongoose').model('User')
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
    if (req.user.customer) {
        console.log("rendering for customer");
        res.render('feedback', {
            title: 'Jayce Lovell Lab02 Feedback',
            userFullName: req.user ? req.user.fullName : '',
            userFirstName: req.user.firstName,
            userLastName: req.user.lastName,
            userEmail: req.user.Email
        });
    }
    else {
        console.log("rendering for admin");
        res.render('viewcustomerfeedback', {
            title: 'Jayce Lovell Lab 02 View Feedback',
            findUser: null
        });
    }
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
                console.log("failed to save feedback");
                const message = getErrorMessage(err);

                req.flash('error', message);

               return res.redirect('/feedback');
           }
        });
        return res.redirect('/thankyou');
    } else {
        console.log("didn't create new feedback");
        return res.redirect('/');
    }
};
exports.findCustomerFeedback = function (req, res, next) {
    console.log("looking for customer feedback");
    let userToFind = req.body.customerName;
    console.log("looking: " + userToFind);
    Feedback.find({ username: userToFind }, function (err, result) {
        console.log("found customer");
        if (err) {
            console.log("failed to find user");
            const message = getErrorMessage(err);

            req.flash('error', message);
            userToFind = null;
            return res.redirect('viewcustomerfeedback')
        } else {
            console.log("found user");
            console.log(result[0].comments);
            console.log(result[0].username);
            res.render('viewcustomerfeedback', {
                title: 'Jayce Lovell Lab 02 View Feedback',
                findUser: result[0].username,
                userComments: result[0].comments
            });
        }
        console.log("In findCustomerFeedback controller: " + result[0].comments);
    });
};