const Users = require('../models/users.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwt.config');

const userAdmin = () => {
    Users.find({email: 'admin@test.com'}) 
        .then(result => {
            if(!result || result.length === 0) {
               Users.create({firstName: 'Administrador', lastName: 'Administrador', email: 'admin@test.com', password: 'admin1234', password: 'admin1234', rol: 'Admin'})
                    .then(usuario => console.log('Usuario creado exitosamente', usuario))
                    .catch(err => console.log('Error al crear el usuario inicial', err))
            }
        })
}

const register = (req,res) => {
    Users.findOne({email: req.body.email})
        .then(result => {
            if(result){
                res.json({error: true, message:"El correo electrónico ya está registrado"})
            } else {
                Users.create(req.body)
                    .then(result => res.json({data:result}))
                    .catch(error => {
                        res.json({error:error, message:"Ocurrió un error"});
                        res.sendStatus(500)
                    })
            }
        });
}

const login = (req, res) => {
    Users.findOne({email: req.body.email})
        .then(result => {
            if(result === null){
                res.json({error: true, message: "Usuario no existe"})
            } else {
                bcrypt.compare(req.body.password, result.password)
                    .then(isValid => {
                        if(isValid){
                            const payload = {
                                _id: result.id,
                                firstName: result.firstName,
                                lastName: result.lastName,
                                email: result.email,
                                rol: result.rol
                            }
                            const token = jwt.sign(payload, secretKey);
                            res.cookie("usertoken", token, secretKey, {httpOnly: true})
                                .json({message: "login", data: payload})
                        } else {
                            res.json({error: true, message: "Contraseña no valida"})
                        }
                    })
                    .catch(error => res.json({error: error, message: "Usuario o contraseña no válidos"}))
            }

        })
        .catch(error => {
            res.json({error: error, message: "Usuario o contraseña no válidos"})
        })
}




module.exports = {userAdmin, register, login};