var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express1' });
});
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'hello world' });
});
router.get('/showusers', function(req, res) {
//  var express = require('express');
  res.render('helloworld', { title: 'show users' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
  var db = req.db;
  db.query('SELECT * FROM users', function(err, rows){
    res.render('userlist', {
      "users" : rows
    });
  });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var userName = req.body.username;
  var userEmail = req.body.useremail;

  db.query('INSERT INTO users (email,first_name, last_name) values ("' + userEmail + '","' + userName + '","last name")', function(err, rows){
    if (err) {
      // If it failed, return error
      res.send("There was a problem adding the information to the database.");
    }
    else {
      // If it worked, set the header so the address bar doesn't still say /adduser
      res.location("userlist");
      // And forward to success page
      res.redirect("userlist");
    }
  });
});


module.exports = router;
