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
  var logger = new (winston.Logger)({
    'transports': [
    new (winston.transports.Console)(
    {
      'level': 'detail',
      'colorize': true
    }),
    new (winston.transports.File)(
    {
      'filename': filename
    })]
  });

  logger.setLevels(log.logger.levels);
  winston.addColors(log.logger.colors);

  return logger;
}