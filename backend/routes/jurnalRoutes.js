
const express = require('express');
const router = express.Router();
const { 
    uploadJurnal, 
    getJurnale, 
    postComment, 
    getComments,
    postAnonymousComment,
    likeJurnal
} = require('../controllers/jurnalController');
const verifyAuth = require('../middleware/verifyAuth');

// Protected routes
router.post('/uploadJurnal', verifyAuth, uploadJurnal);
router.post('/comment', verifyAuth, postComment);  
router.post('/like/:jurnalId', verifyAuth, likeJurnal);

// Public routes
router.get('/getJurnale', getJurnale);
router.post('/comment/anonymous', postAnonymousComment);  
router.get('/getComments/:jurnalId', getComments); 

module.exports = router;