var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var _              = require('underscore');
var routes         = require('./routes');

var app            = express();

var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'development';

if ('development' == env) {
   // configure stuff here
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(__dirname + '/public')); 
app.use(morgan('dev'));           
app.use(bodyParser());            
app.use(methodOverride());

app.route('/').get(routes.index)

app.listen(port); 
console.log('Server listening on port ' + port);
