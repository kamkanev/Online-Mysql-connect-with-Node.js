var mysql = require('mysql');
var md5 = require('md5');

var con = mysql.createConnection({
  host: "us-cdbr-gcp-east-01.cleardb.net",
  user: "b114ce76bf66ed",
  password: "d71456d7",
database: "gcp_f31a9a49485ea4e17771"
});

con.connect(function(err) {
  if (err)
console.log(err);
else
  console.log("Connected!");
});

con.query('SELECT * FROM Users', function (error, results, fields) {
  if (error)
console.log(error);
else
  console.log(results);
console.log(md5("feniks11"));
  
});
