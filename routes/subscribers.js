const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

// Getting all
router.get('/', async (req, res) => {
  res.send('Hello World');
});

// Getting One
router.get('/:id', getSubscriber, (req, res) => {});

// Creating one
router.post('/', async (req, res) => {});

// Updating One
router.patch('/:id', getSubscriber, async (req, res) => {});

// Deleting One
router.delete('/:id', getSubscriber, async (req, res) => {});

module.exports = router;
