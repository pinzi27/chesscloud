var mongoose = require('mongoose');
var logger = require('./util/customLogger').getLogger(false);

mongoose.connect('mongodb://localhost/test'); 

mongoose.set('debug', function (collectionName, method, query, doc, options) {
  logger.debug('mongo collection: %s method: %s query: %s', collectionName, method, JSON.stringify(query));
});
// We define the Schema

var UserSchema = mongoose.Schema({
    username: String,
    mail: String,
    password: String
});

// We define the Model from the Schema
var User = mongoose.model('user', UserSchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  
  logger.info('Connection established');

  // Define an user 
  var test_credentials = { username: 'Prova', mail: 'prova@prova.com', password: 'test' };
  var user_test = new User(test_credentials)
  logger.detail('define user_test', test_credentials)
  user_test.save(function (err, user, numberAffected) {
    if (err) return logger.error(err);
    logger.detail('user inserted with _id ' + user['_id']);

    // Find an user
    user_found = User.find({ username: 'Prova'}, function callback(err, users) {
      if (err) return logger.error(err);
      logger.detail('user found: %s', JSON.stringify(users));
      
      // Close connection
      db.close(function () {
        logger.info('Connection closed');
      });
    });
  });
});





  


  
