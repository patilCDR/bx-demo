const express = require('express');
const { sendEmail } = require('../controllers/contact.controllers');

const router = express.Router();

router.post('/sendmail', sendEmail);

module.exports = router;
