const http = require('http');
const app = require('./config/express')();

const uri = 
        process.env.MONGOLAB_URI ||
        process.env.MONGOHQ_URL ||
        'mongodb://localhost/door-control';

require('./config/database')(uri);

http.createServer(app).listen(app.get('port'), () => {
    console.log("Express Server listening on port " + app.get('port'));
})