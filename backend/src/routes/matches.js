const express = require('express');
const router = express.Router();

// Get all matches
router.get('/', (req, res) => {
  res.json({ message: 'Get all matches' });
});

// Create match
router.post('/', (req, res) => {
  res.json({ message: 'Create match' });
});

// Get match by ID
router.get('/:id', (req, res) => {
  res.json({ message: 'Get match by ID', matchId: req.params.id });
});

// Submit match result
router.put('/:id/result', (req, res) => {
  res.json({ message: 'Submit match result', matchId: req.params.id });
});

module.exports = router;
