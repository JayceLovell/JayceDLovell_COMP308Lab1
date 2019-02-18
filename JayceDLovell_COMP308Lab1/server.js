// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// Load the module dependencies
const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');
const configurePassport = require('./config/passport');
// Create a new Mongoose connection instance
const db = configureMongoose();
// Create a new Express application instance
const app = configureExpress();
// Configure the Passport middleware
const passport = configurePassport();
app.listen(1337);
console.log("Server is running at http://localhost:1337/");
console.log("Made by Jayce Lovell 300833478");
module.exports = app;