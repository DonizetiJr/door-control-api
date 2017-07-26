const http = require('http');
const app = require('./config/express')();
require('./config/database')('localhost/door-control');

http.createServer(app).listen(app.get('port'), () => {
    console.log("Express Server listening on port " + app.get('port'));
})