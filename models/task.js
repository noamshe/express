/**
 *
 * Created by noam on 7/2/14.
 */
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.User)
      }
    }
  })

  return Task
}
