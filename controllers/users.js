/**
 * Created by noam on 7/3/14.
 */

/* GET Userlist page. */
module.exports.showUserList = function(req, res) {
  var db = req.db;
  db.query('SELECT * FROM users', function(err, rows){
    res.render('userlist', {
      "users" : rows
    });
  });
};

module.exports.newUser = function(req, res) {
  res.render('newuser', { title: 'Add New User' });
}

/* POST to Add User Service */
module.exports.addUser = function(req, res) {

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
};

// USING Sequelize
//var dbseq = require('../models')
var dbseq = require('../models/initsequelize.js')

module.exports.testseq = function(req, res) {
  dbseq.User.findAll({ include: [ dbseq.Task ] }).success(function(users) {
    res.render('sequelize', {
      title: 'Express',
      users: users
    })
  })
};

//module.exports = router;
