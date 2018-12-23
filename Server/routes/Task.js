var express = require('express');
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
    
    console.log(req.body)
    console.log(req.body.id);
    console.log(req.body.action);
    console.log("test message");

    switch(req.body.action){
        case "new":
            Task.createTask(req.body.content, req.body.userID, function(err, result){
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
            Task.deleteTask(req.body.listID, function(err, result){
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
            Task.updateTask(req.body.listID, req.body.content, function(err, result){
                if(err){
                    res.json(err);
                }
                else{
                    res.json(result);
                }
            });
            break;
        case "update_Done":
            Task.updateTaskDone(req.body.listID, req.body.done, function(err, result){
                if(err){
                    res.json(err);
                }
                else{
                    res.json(result);
                }
            });
            break; 
        case "getAllTaskByUserID":
            Task.getAllTasksByUserID(req.body.userID, function(err, result){
                if(err){
                    res.json(err);
                }
                else{
                    res.json(result);
                }
            });
            break; 
        case "getAllTaskBylistID":
            Task.getTasksByID(req.body.listID2, function(err, result){
                if(err){
                    res.json(err);
                }
                else{
                    res.json(result);
                }
            });
            break; 
        default:
            Task.getAllTasks(function(err, result){
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
    }

});


module.exports = router;