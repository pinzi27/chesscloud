var winston = require('winston');

var log = {
  'logger' : {
    'levels': {
      'detail': 0,
      'trace': 1,
      'debug': 2,
      'info': 3,
      'warn': 4,
      'error': 5
    },
    'colors': {
      'detail': 'grey',
      'trace': 'white',
      'debug': 'blue',
      'info': 'green',
      'warn': 'yellow',
      'error': 'red'
    },
  }
};
 
exports.getLogger = function (filename) {
  var trans = [
  new (winston.transports.Console)(
    {
      'level': 'detail',
      'colorize': true
    })];
  if (filename != false) {
    trans.push(new (winston.transports.File)(
    {
      'filename': filename
    }));
  }
  var logger = new (winston.Logger)({
    'transports': trans
  });

  logger.setLevels(log.logger.levels);
  winston.addColors(log.logger.colors);

  return logger;
}