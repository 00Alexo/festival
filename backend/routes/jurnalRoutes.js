const express = require('express');
const { 
    uploadJurnal,
} = require('../controllers/jurnalController');

const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

router.use(requireAuth);

router.post('/uploadJurnal', uploadJurnal);

module.exports = router;