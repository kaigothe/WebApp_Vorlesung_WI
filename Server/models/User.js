var db = require("../dbconnection");

var User = {
    createUser:function(name, callback){
        return db.query("INSERT INTO `WebApp`.`user` (`name`) VALUES (?);", [name],callback);
    },

    deleteUser:function(userID, callback){
        return db.query("DELETE FROM `WebApp`.`user` WHERE (`iduser` = ?);", [userID], callback);
    },

    updateUsername:function(userID, name, callback){
        return db.query("UPDATE `WebApp`.`user` SET `name` = ? WHERE (`iduser` = ?);", [name, userID], callback);
    },

    isUserAvailable:function(name, callback){
        return db.query("SELECT COUNT(*) AS NumbersOfUser FROM WebApp.user WHERE `name` = ?", [name], callback);
    },

    getAllUser:function(callback){
        return db.query("SELECT * FROM WebApp.user ", callback);
    },

    getAllUserByID:function(userId, callback){
        return db.query("SELECT * FROM WebApp.user WHERE `iduser` = ?", [userId], callback);
    },

    getUserByName:function(userName, callback){
        return db.query("SELECT * FROM WebApp.user WHERE `name` = ?", [userName], callback);
    }

    
}

module.exports = User;