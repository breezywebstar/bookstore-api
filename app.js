
const express = require('express');
const mongoose  = require('mongoose');
const app = express();
const rateLimit = require('express-rate-limit');

const bookRoute = require('./routes/bookRoute');
const bookuserRoutes = require('./routes/bookuser')
app.use(express.json());





//connect db mongo atlas

mongoose.connect('mongodb://breezy:breezy@cluster0-shard-00-00.vapq8.mongodb.net:27017,cluster0-shard-00-01.vapq8.mongodb.net:27017,cluster0-shard-00-02.vapq8.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority')
.then(() =>{
    console.log('MongoDB atlass connected successfuly')
})

.catch((error)=>{
    console.log(error)
});
//added rate limiter for our api, it affects all our endpoints
const limiter = rateLimit({
windowMs: 10 * 60 * 1,
max: 5
})
app.use(limiter);


//handling cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use('/api/book/', bookRoute);
app.use('/api/auth', bookuserRoutes);


const port = 3001;
app.listen(port, console.log('server running on port '+ port));
