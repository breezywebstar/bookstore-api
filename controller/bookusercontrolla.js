const Bookuser = require('../models/bookuser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next)=>{
bcrypt.hash(req.body.password,10).then((hash)=>{
    const bookuser = new Bookuser({
      email: req.body.email,
      password: hash  
    });
    bookuser.save().then(()=>{
        res.json({message:'signup successful'})
    }).catch((error)=>{
        res.json({error: error});
    });
});


};

exports.login = (req, res, next) =>{
    Bookuser.findOne({email: req.body.email}).then((user)=>{
        if(!user){
            return res.json({error: new Error('email not found')}); 
        }
        bcrypt.compare(req.body.password, user.password).then((valid) =>{
            if(!valid){
                return res.json({error: new Error('invalid password, please reset')});
            }        
            const token = jwt.sign({userId: user._id},'RANDOM_TOKEN_SECRET_STRING', {expiresIn: '24h'}); 
            res.json({userId: user._id, email: user.email, token: token});

        }).catch((error)=>{
        res.json({error: error});       
         })

    }).catch((error) =>{
        res.json({error: error});
    });

}