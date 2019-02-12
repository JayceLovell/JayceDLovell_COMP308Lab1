// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// Load the module dependencies
var mongoose = require('./config/mongoose');
const configureExpress = require('./config/express');
// Create a new Express application instance
const app = configureExpress();
// Create a new Mongoose connection instance
var db = mongoose();
app.listen(1337);
console.log("Server is running at http://localhost:1337/");
console.log("Made by Jayce Lovell 300833478");
module.exports = app;