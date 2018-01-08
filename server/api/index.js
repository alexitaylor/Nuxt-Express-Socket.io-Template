'use strict';

var _express = require('express');

var _users = require('./users');

var router = _express.Router();

// Add USERS Routes
router.use(_users);

module.exports = router;