var express = require('express');
const boxen = require('boxen');
var router = express.Router();
var User=require('../models/User');


router.get('/:userID?', function(req,res,next){
    if(req.params.userID){
        User.getAllUserByID(req.params.userID, function(err, result){
            if(err){
                res.json(err);
            }else{
                res.json(result);
            } 
        });
    }else{
        User.getAllUser(function(err, result){
            if(err){
                res.json(err);
            }else{
                res.json(result);
            } 
        });
    }
});


router.post('/', function(req, res, next){

    var action      = req.body.action;
    var userName    = req.body.userName;
    var userID      = req.body.userID;

    console.log(boxen(JSON.stringify(req.body), {padding: 1, margin: 1, borderStyle: 'double'}));

    switch (action) {
        case "new":
            User.createUser(userName, function(err, result){
                if(err){
                    res.json(err);
                }else{
                    res.json(result);
                } 
            });
            break;
        case "update_name":
            User.updateUsername(userID, userName, function(err, result){
                if(err){
                    res.json(err);
                }else{
                    res.json(result);
                } 
            });
            break;
        case "delete":
            User.deleteUser(userID, function(err, result){
                if(err){
                    res.json(err);
                }else{
                    res.json(result);
                } 
            });
            break;
        case "existsUser":
            User.isUserAvailable(userName, function(err, result){
                if(err){
                    res.json(err);
                }else{
                    res.json(result);
                } 
            });
            break;
        case "userData":
            User.getUserByName(userName, function(err, result){
                if(err){
                    res.json(err);
                }else{
                    res.json(result);
                } 
            });
            break;
    
        default:
            res.json({
                error: "API action is not set"
            });
            break;
    }
    
});

module.exports = router;