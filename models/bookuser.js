const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const BookuserSchema = mongoose.Schema({
    email: {type:String, required: true, unique: true},
    password: {type: String, required: true}
});

BookuserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Bookuser', BookuserSchema);