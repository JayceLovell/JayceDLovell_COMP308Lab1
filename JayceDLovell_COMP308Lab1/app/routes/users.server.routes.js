﻿// Load the module dependencies
const users = require('../../app/controllers/users.server.controller');
const passport = require('passport');

// Define the routes module' method
module.exports = function (app) {
    // Set up the 'signup' routes 
    app.route('/signup')
        .get(users.renderSignup)
        .post(users.signup);
    if (users.adminCheck) {
        // Set up the 'signin' routes 
        app.route('/signin')
            .get(users.renderSignin)
            .post(passport.authenticate('local', {
                successRedirect: '/viewcustomerfeedback',
                failureRedirect: '/signin',
                failureFlash: true
            }));
    }
    else {
        // Set up the 'signin' routes 
        app.route('/signin')
            .get(users.renderSignin)
            .post(passport.authenticate('local', {
                successRedirect: '/feedback',
                failureRedirect: '/signin',
                failureFlash: true
            }));
    }
    // Set up the Facebook OAuth routes 
    app.get('/oauth/facebook', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }));
    app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/signin',
        successRedirect: '/'
    }));

    // Set up the Twitter OAuth routes 
    app.get('/oauth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }));
    app.get('/oauth/twitter/callback', passport.authenticate('twitter', {
        failureRedirect: '/signin',
        successRedirect: '/'
    }));

    // Set up the Google OAuth routes 
    app.get('/oauth/google', passport.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ],
        failureRedirect: '/signin'
    }));
    app.get('/oauth/google/callback', passport.authenticate('google', {
        failureRedirect: '/signin',
        successRedirect: '/'
    }));

    // Set up the 'signout' route
    app.get('/signout', users.signout);
};