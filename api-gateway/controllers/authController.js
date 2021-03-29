/*
============================================
; Title:  authController.js
; Author: Adam Luna
; Date: 28 March 2021
; Description: Auth Controller file for api-gateway
;===========================================
*/

var User = require('../models/user');

// Register a new user on POST
exports.user_register = function(req, res){
    res.send('Not Implemented: User registration POST');
};

// Verify token on GET
exports.user_token = function(req, res){
    res.send('Not Implemented: User token lookup GET');
};