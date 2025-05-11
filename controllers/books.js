const Book = require('../models/book')


exports.getAddBook = (req, res, next) => {
    res.render('add-book', {
        pageTitle: 'Add a book',
        path: '/add-book'
    })
};

exports.postAddBook = (req, res, next) =>{
    const book = new Book(req.body.name, req.body.rating);
    book.save();
    res.redirect('/');
};

exports.getBook = (req, res, next) => {

    Book.fetchall(boks => {
        res.render('books', {
            pageTitle:'Read it',
            path: '/',
            books: boks
        })
    })
};
