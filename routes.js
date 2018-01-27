const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the PennClubReview API!');
});
  
router.post('/', (req, res) => {
  res.send('The request body is: ' + req.body);
});

module.exports = router;