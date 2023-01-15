
const Book = require('../models/book');


exports.createBook = (req, res, next) =>{
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        description: req.body.description
    });
    book.save().then(()=>{
        res.json({message:"book created successfully"});
    }).catch((error) =>{
        res.json({error:error})
    })

}
exports.getOneBook = (req, res, next) =>{
    Book.find({_id:req.params._id})
    .then((book)=>{
        res.json(book);

    }).catch((error)=>{
        res.json({error:error});
    })
}

exports.updateBook =(req, res, next) =>{
    const book = new Book({
        _id: req.body._id,
        title: req.body.title,
        author: req.body.author,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        description: req.body.description
    });

    Book.updateOne({_id: req.params.id}, book)
    .then(()=>{
        res.json({message:"record updated successfully"});
    })
    .catch((error)=>{
        res.json(error)
    })

}

exports.deleteOneBook = (req, res, next) =>{
    Book.deleteOne({_id:req.params._id})
    .then(() =>{
        res.json({message:"record deleted successfully"})
    })
    .catch((error)=>{
        res.json(error)
    })
}

exports.deleteManyBook = (req, res, next) =>{
    Book.deleteMany({_id:req.params._id})
    .then(() =>{
        res.json({message:"record deleted successfully"})
    })
    .catch((error)=>{
        res.json(error)
    })
}

exports.getCode =(req, res, next) =>{
    console.log('otp');
    res.json({otp: Math.floor(100000 + Math.random() * 90000)});
    
};

exports.getAllBooks = (req, res, next) =>{
    Book.find().then((books)=>{
        res.json(books);
    }).catch((error)=>{
        res.json(error)
    });

};

exports.getAllBookPrice = (req, res, next) =>{
    Book.find().then((bookprices)=>{

        let sum = bookprices.reduce(function (accumulator, curValue) {

            return accumulator + curValue.price
          
          }, 0)
          
          console.log(sum)
    }).catch((error)=>{
        res.json(error)
    });

};