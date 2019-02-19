    var index = require('../controllers/index.server.controller.js');
    // Load the 'users' controller
    //var users = require('../controllers/users.server.controller');
module.exports = function (app) {
    //handle a get request made to root path
    app.get('/', index.render); //go to http://localhost:1337/
    //handle a post request made to root path
    //app.post('/', users.create); 
    /*app.get('/', index.render);
    app.post('/', function (request, response) {
        console.log("render feedback");
        feedback.render(request, response);
        console.log("finish render feedback")
    });
    app.post('/feedback', thankyou.render);
    //app.post('/ThankYou', thankyou.render);*/
}