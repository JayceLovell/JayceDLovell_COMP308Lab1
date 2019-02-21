const User = require('mongoose').model('User');
const Feedback = require('mongoose').model('Feedback');

var userComments = null;

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
    ; return message;
}

exports.findCustomerFeedback = function (req, res, next) {
    console.log("looking for customer feedback");
    let userToFind = req.body.customerName;
    console.log("looking: "+userToFind);
    Feedback.find({ username: userToFind }, function (err, result){
        console.log("found customer");
        if (err) {
            console.log("failed to find user");
            const message = getErrorMessage(err);

            req.flash('error', message);
            userToFind = null;
            return res.redirect('viewcustomerfeedback')
        } else {
            console.log("found user");
            console.log(result.comments);
            console.log(results.username);
            res.render('viewcustomerfeedback', {
                title: 'Jayce Lovell Lab 02 View Feedback',
                findUser: result.username,
                userComments: result.comments
            });
        }
        console.log("In findCustomerFeedback controller: " + result.comments);
    });
};