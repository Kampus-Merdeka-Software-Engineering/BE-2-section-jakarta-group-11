// ini contactRoute.js

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/submit', contactController.createContact);
router.get('/getAll', contactController.getAllContacts);

module.exports = router;
