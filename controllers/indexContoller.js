var express = require('express');
var router = express.Router();
var userModel = require('../models/user');
var mongoose = require('mongoose');

exports.postStory = function(req,res) {
    var story = new userModel(req.body)

    story.save();
    res.send(story);
}

exports.stories = function(req,res) {
    userModel.find({}, function(err, data){
        if(err){
            console.log('Something went wrong in the stories part of the controller')
        }
        else{
            res.render('index', {data});
        }
    })
}