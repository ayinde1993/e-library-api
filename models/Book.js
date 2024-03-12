const mongoose = require('mongoose');
const CategorieSchema = require ('./Categorie')

const BookSchema = new mongoose.Schema({
    name: {
type: String,
required: [true, 'must provide name'],
trim:true,
minlength:[10, 'name must  be more than 09 characters'],
maxlength:[20, 'name can not be more than 20 characters']
    },
    categorie:[ CategorieSchema ],
    borrowed:{type: Boolean, default: false, borrowDate: Date },
    returned:{type: Boolean, default: false, returnDate: Date }

})

module.exports = mongoose.model('Book', BookSchema)

