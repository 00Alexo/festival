const express = require('express');
const { 
    uploadJurnal,
    getJurnale
} = require('../controllers/jurnalController');

const verifyAuth = require('../middleware/verifyAuth');

const router = express.Router();

router.get('/getJurnale', getJurnale);

router.use(verifyAuth);

router.post('/uploadJurnal', uploadJurnal);

module.exports = router;