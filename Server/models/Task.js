var db = require("../dbconnection");

var Task = {

    getAllTasks:function(callback){
        return db.query("SELECT * FROM WebApp.listItem;", callback);
    },

    createTask:function(text, owner, callback){
        return db.query("INSERT INTO `WebApp`.`listItem` (`owner`, `content`, `done`, `created`) VALUES (?, ?, '0', CURRENT_TIMESTAMP());", [owner, text], callback);
    },

    deleteTask:function(listID, callback){
        return db.query("DELETE FROM `WebApp`.`listItem` WHERE (`idlistItem` = ?);", [listID], callback);
    },

    updateTask:function(listID, text, callback){
        return db.query("UPDATE `WebApp`.`listItem` SET `content` = ? WHERE (`idlistItem` = ?);", [text,listID], callback);
    },

    updateTaskDone:function(listID, done, callback){
        return db.query("UPDATE `WebApp`.`listItem` SET `done` = ? WHERE (`idlistItem` = ?);", [done,listID], callback);
    },

    getTasksByID:function(listID, callback){
        return db.query("SELECT * FROM WebApp.listItem WHERE idlistItem = ?;", [listID], callback);
    },

    getAllTasksByUserID:function(userID, callback){
        return db.query("SELECT * FROM WebApp.listItem WHERE owner = ?;", [userID], callback);
    }

}

module.exports = Task;