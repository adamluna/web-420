/*
============================================
; Title: config.js
; Author: Adam Luna
; Date: 21 March 2021
; Description: config.js file for assignment 1.4
;===========================================
*/

// config object creation
var config = {};
config.web = {};
config.web.port = process.env.PORT || "3000";

// public key
config.web.secret = "topsecret";

module.exports = config;