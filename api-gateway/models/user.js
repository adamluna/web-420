/*
============================================
; Title:  user.js
; Author: Professor Krasso
; Date:   28 March 2021
; Modified by: Adam Luna
; Description: User model for api-gateway
;===========================================
*/

// Import Mongoose
var mongoose = require('mongoose');

// Create a user schema in Mongoose
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

// Exports our user schema
module.exports = mongoose.model('User', userSchema);