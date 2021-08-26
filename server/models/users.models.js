const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UsersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "El nombre del cliente es requerido"],
        trim: true
    },

    lastName: {
        type: String,
        required: [true, "El apellido del cliente es requerido"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "El correo electrónico del cliente es requerido"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Escriba un formato correcto como name@mail.com" 
        },
        unique: true //unique, porque el email es único al igual que su id
    },

    password: {
        type: String,
        required: [true, "Debe ingresar su contraseña"],
        minleght: [5, "La contraseña debe tener 5 caracteres o más"],
        trim: true
    },

    rol: {
        type: String,
        default: "Client"
    }
  },
{timestamps: true});

UsersSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

UsersSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Las contraseñas deben ser iguales');
    }
    next();
});

UsersSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;