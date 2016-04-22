var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended:false});
var port = process.env.PORT || 5000;

app.use(express.static('public'));

app.get('/date',function (req,res) {

});

app.post("/date", parseUrlencoded, function(req,res){
var date = req.body.date;
console.log(date);
if(!date.match(/D/g)){
  var stamp = new Date(parseInt(date));
}
else{
  var stamp = new Date(date);
}
console.log(stamp);
res.json([stamp, stamp.getTime()]);

});

app.listen(port, function(){
  console.log('Listening on port ' + port);
});
