const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const sharpConfig=require('../middleware/sharp-config')

const bookCtrl = require('../controllers/book');

router.get('/', bookCtrl.getAllBooks);
router.post('/', auth,  sharpConfig,bookCtrl.createBook);
router.get('/bestrating',  bookCtrl.getBestRating);
router.get('/:id', bookCtrl.getOneBook);
router.put('/:id', auth, sharpConfig, bookCtrl.modifyBook);
router.delete('/:id', auth, bookCtrl.deleteBook);
router.post('/:id/rating',auth,bookCtrl.createRating)

module.exports = router;