const express = require('express')

const router = express.Router();

const booksController = require('../controllers/books.js');

router.get('/add-book', booksController.getAddBook);
router.post('/add-book', booksController.postAddBook);

router.get('/',booksController.getBook);
module.exports = router;
