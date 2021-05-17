/*
============================================
; Title:  api-catalog.js
; Author: Adam Luna
; Date: 28 March 2021
; Description: api catalog file for api-gateway
;===========================================
*/

// API Routes
var express = require("express");
var router = express.Router();
var auth_controller = require("../controllers/authController");
var checkToken = require("../check-token");

// POST request for registering a user
router.post("/auth/register", auth_controller.user_register);

// GET request for verifying user tokens
router.get("/auth/token", checkToken, auth_controller.user_token);

// user login requests
router.post("/auth/login", auth_controller.user_login);

// user logout requests
router.get("/auth/logout", auth_controller.user_logout);

module.exports = router;