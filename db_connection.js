
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    database:"test",
    user: "root",
    
    password: "gd"
  
    
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
x
