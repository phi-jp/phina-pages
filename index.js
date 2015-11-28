var fs = require('fs');
var path = require('path');
var express = require("express");
var zip = require("express-zip");
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

var template = (function() {
  var html = fs.readFileSync('template/index.html').toString();
  var js = fs.readFileSync('template/main.js').toString();

  return {
    html: html,
    js: js,
  };
})();

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Home',
    template: template,
  });
});

app.get('/download', function(req, res) {
  res.zip([
    { path: 'template/index.html', name: 'phinajs/index.html', },
    { path: 'template/main.js', name: 'phinajs/main.js', },
  ], 'phinajs.zip');
});

app.listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});
