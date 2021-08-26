const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Este campo es obligatorio"],
        unique: true
    },
    description: {
        type: String,
        required: [true, "Este campo es obligatorio"]
    },
    category: { //tipo de plato
        type: String,
        required: [true, "Este campo es obligatorio"]
    },
    price: {
        type: Number,
        required: [true, "Este campo es obligatorio"]
    },
    image: {
        type: String,
        required: [true, "Este campo es obligatorio"]
    },
    date : {
        type: Date,
        default: Date.now()
    }

}, {timestamps: true});

const Menus= mongoose.model('Menus', MenuSchema);

module.exports = Menus;