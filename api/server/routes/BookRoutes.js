const { Router } = require('express');
const BookController = require('../controllers/BookController');

const router = Router();

router.get('/', (req, res) => {
    BookController.getAllBooks(req,res)

});
router.post('/',(req,res)=>{ 
    BookController.addBook(req,res)

    // res.status(200).send(req.body)
    
});
router.get('/:id', BookController.getABook);
router.put('/:id', BookController.updatedBook);
router.delete('/:id', BookController.deleteBook);

module.exports = router;
