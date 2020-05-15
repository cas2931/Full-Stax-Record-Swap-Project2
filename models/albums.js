module.exports = function(sequelize, DataTypes) {
    var Album = sequelize.define("Album", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      artist: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }, 
      listened: {
        type: DataTypes.BOOLEAN, 
        defaultValue: '0'
      }, 
      review: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
  
    Album.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Album.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Album;
  };
  