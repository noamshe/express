/**
 * Created by noam on 7/3/14.
 */

module.exports = function(app) {
  var usersControllers = require('../controllers/users.js');

  app.get('/newuser2', usersControllers.myfunc);
}

