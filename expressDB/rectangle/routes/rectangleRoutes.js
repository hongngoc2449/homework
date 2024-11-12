const express = require('express');
const router = express.Router();
const rectangleController = require('../controllers/rectangleController');

// Update the route to match the form action URL

router.post('/calculate', rectangleController.calculatePerimeter);

module.exports = router;