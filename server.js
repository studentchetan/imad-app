var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var session = require('express-session');


var config ={
    user: 'chetankar65',
    database : 'chetankar65',
    host : 'db.imad.hasura-app.io',
    port : '5432' ,
    password : process.env.DB_PASSWORD
    
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(session ({
    secret : 'SomeRandomSecretValue',
    cookie : {maxAge : 100 * 60 * 60 *24}
}));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));


});

app.get('/article-two', function(req,res){
      res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));

});

app.get('/article-three', function(req,res){
      res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));

});

app.get('/article-two', function(req,res){
      res.sendFile(path.join(__dirname, 'ui', 'register.html'));

});

function hash(input, salt) {
    var hashed = crypto.pbkdf2Sync(input , salt ,10000 ,512 ,'sha512');
    return ["pbkdf2", "10000", salt , hashed.toString('hex')].join('$');
}
app.get('/hash/:input', function(req,res){
    var hashedString = hash(req.params.input, 'This-Is-Some-Random-String');
    res.send(hashedString);
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var pool = new Pool(config);
app.get('/create-user',function(req,res){
   //username,Password
   var salt = crypto.randomBytes(128).toString('hex');
   var dbString = hash(password,salt);
   pool.query('INSERT INTO "user" (username,password) VALUES($1,$2)',[username,dbString], function (err,result) {
       if (err) {
           res.status(500).send(err.toString());
       } else {
           res.send("User successfully created :" + username);
       }
       
   });
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
