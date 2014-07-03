/**
 * Created by noam on 7/3/14.
 */

module.exports = function(app) {
  var usersControllers = require('../controllers/users.js');

  app.get('/newuser', usersControllers.newUser);
  app.get('/userlist', usersControllers.showUserList);
  app.post('/addUser', usersControllers.addUser);

  app.get('/testseq', usersControllers.testseq);
}

