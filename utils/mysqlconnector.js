/**
 *
 * Created by noam on 7/3/14.
 */

// **** databases connnection
var path = require('path');
var mysql = require('mysql');
//  var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});

connection.query('USE test_database');

module.exports = connection;

