const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('User', {
    rollNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'user' // Specify table name if it already exists in the database
});

module.exports = User;


// const User = sequelize.define('User', {
//     userId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true, //^ to avoid create default id field 
//         logging: false //^ Disable logging
//     },
//     username: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// }, {
//     tableName: 'user', 
//     timestamps: false //^ Disable createdAt and updatedAt fields
// });

