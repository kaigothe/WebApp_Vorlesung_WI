var express = require('express');
const boxen = require('boxen');
var router = express.Router();
var Task=require('../models/Task');



router.get('/:id?', function(req,res,next){

    if (req.params.id){
        Task.getTasksByID(req.params.id, function(err, result){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(result);
            } 
        });

    }else{
        Task.getAllTasks(function(err,rows){

            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
     
        });
    }

});

router.post('/:id?', function(req,res,next){
    
    console.log(boxen(JSON.stringify(req.body), {padding: 1, margin: 1, borderStyle: 'double'}));


    var action          = req.body.action;
    var userID          = req.body.userID;
    var listID          = req.body.listID;
    var done            = req.body.done;
    var serachQuery     = req.body.searchQuery;
    var task_text       = req.body.task_text;

    switch(action){
        case "new":
            console.log("New Task will created");
            Task.createTask(task_text, userID, function(err, result){
                if(err)
                {
                    res.json(err);
                }
                else
                {
                    res.json(result);
                } 
            });
            break;
        case "delete":
            console.log("Task will deleted");
            Task.deleteTask(listID, function(err, result){
                if(err)
                {
                    res.json(err);
                }
                else
                {
                    res.json(result);
                } 
            })
            break;
        case "update_Task":
            console.log("Update Task Text");
            Task.updateTaskText(listID, task_text, function(err, result){
                if(err){
                    res.json(err);
                }
                else{
                    res.json(result);
                }
            });
            break;
        case "update_Done":
            console.log("Update Done status");
            Task.updateTaskDone(listID, done, function(err, result){
                if(err){
                    res.json(err);
                }
                else{
                    res.json(result);
                }
            });
            break; 
        case "getAllTaskByUserID":
            console.log("Searching for Taks for User " + userID);
            Task.getAllTasksByUserID(userID, function(err, result){
                if(err){
                    res.json(err);
                }
                else{
                    res.json(result);
                }
            });
            break; 
        case "getAllTaskBylistID":
            console.log("Searching all Tasks in Database with ID");
            Task.getTasksByID(listID, function(err, result){
                if(err){
                    res.json(err);
                }
                else{
                    res.json(result);
                }
            });
            break; 
        case "searchQuery":
            console.log("Searching all Tasks with contains '"+ serachQuery +"'");
            Task.searchWithQuery(serachQuery, userID, function(err, result){
                if(err){
                    res.json(err);
                }
                else{
                    res.json(result);
                }
            });
        default:
            console.warn("operation not implented :0");
        break;
    }

});


module.exports = router;