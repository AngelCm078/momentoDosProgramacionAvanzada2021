const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = Schema({
    foodPlate: String,
    description: String,
    price: Number,
    available:{
        type:Boolean,
        default: true
    }
});

module.exports = mongoose.model('menu', MenuSchema);