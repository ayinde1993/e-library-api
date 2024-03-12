const mongoose = require('mongoose');


const CategorieSchema = new mongoose.Schema({
    name: {
type: String,
required: [true, 'must provide name'],
trim:true,
minlength:[7, 'name must  be more than 09 characters'],
maxlength:[15, 'name can not be more than 20 characters']
    },
})

module.exports = mongoose.model('Categorie', CategorieSchema)

