const express = require('express');
const router = express.Router();
const bookCtrl = require('../controller/bookCon')

router.post('/', bookCtrl.createBook);
router.get('/', bookCtrl.getAllBooks);
router.get('/price', bookCtrl.getAllBookPrice);
router.post('/code',bookCtrl.getCode);
router.get('/:_id',bookCtrl.getOneBook);
router.put('/:id',bookCtrl.updateBook);
router.delete('/:id',bookCtrl.deleteOneBook);
router.delete('/:id',bookCtrl.deleteManyBook);


module.exports = router;