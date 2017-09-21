var mongoose = require('mongoose'),   
    express = require('./express');
let port = process.env.PORT

module.exports.start = function() {
  var app = express.init();
  app.listen(port, function() {
    console.log('App listening on port', port);
  });
};