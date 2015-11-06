'use strict';

var math = require('./math.js');
var str = require('./wordCount');
var http = require('http');
var md5 = require('md5');
console.log(math.sum([2,2,2]));
var server = http.createServer(function(req,res){
  res.setHeader('Access-Control-Allow-Origin','*');
  var path = req.url.split('/');

  switch(path[1]){
    case 'math':
      switch(path[2]){
        case 'cube':
          var cube = math.cube(path[3]);
          res.write(JSON.stringify(cube));
          break;
        case 'sum':
          var arr = path.slice(3);
          var sum = math.sum(arr);
          res.write(JSON.stringify(sum));
          break;
        case 'factorial':
          var fact = math.factorial(path[3]);
          console.log(fact);
          res.write(JSON.stringify(fact));
          break;
        case 'cuberoot':
          var cubeRT = math.cuberoot(path[3]);
          res.write(JSON.stringify(cubeRT));
          break;
        default:
          res.write('Invalid Path');
          break;
      }
      break;
    case 'sentence':
      var uri = decodeURI(path[2]);
      var obj = str.counts(uri);
      res.write(JSON.stringify(obj));
      break;
    case 'gravatar':
      var hash = md5(path[2]);
      var urlString = 'http://www.gravatar.com/avatar/'+hash;
      res.write(urlString);
      break;
    default:
      res.write('Invalid Path');
      break;
  }
  res.end();
});


server.listen(3000);
