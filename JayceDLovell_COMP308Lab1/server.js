process.env.NODE_ENV = 'development'; //process.node.NODE_ENV || 'development';
const configureExpress = require('./config/express')
const app = configureExpress();
app.listen(1337);
console.log("Server is running at http://localhost:3000/");
module.exports = app;