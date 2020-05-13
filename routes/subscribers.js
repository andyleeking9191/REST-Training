const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

// Get All
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
// Get one
router.get('/:id', (req, res) => { // the :id is the paramaders that are passed by the client
    res.send(req.params.id)
})
// Create one
router.get('/', (req, res) => {

})
// Update one
router.patch('/:id', (req, res) => {

})
// Delete one
router.delete('/:id', (req, res) => {

})

module.exports = router;