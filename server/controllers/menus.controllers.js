const Menus = require("../models/Menu.models");
const jwt = require("jsonwebtoken");
const { secretKey } = require('../config/jwt.config');

const findMenu = (req, res) => {
    jwt.verify(req.cookies.usertoken, secretKey, (err, payload) => {
        if (err) {
          res.status(401).json({verified: false});
        } else {
           if (payload.rol === "Admin"){
                    Menus.find({})
                        .then(result => res.json({data: result}))
                        .catch(err => res.json(err))
            } else {
                    Menus.find({email: payload.email})
                        .then(result => res.json({data: result}))
                        .catch(err => res.json(err))
            }
        }
      });

    /* Menus.find({}).sort({date: -1})
        .then(result => res.json({data: result}))
        .catch(error => {
            res.json({error:error, message:"Algo salió mal en el menu"})
            res.sendStatus(404);
        }) */
}

const findSingleMenu = (req, res) => {
    Menus.findOne({_id: req.params.id})
        .then(result => res.json({data: result}))
        .catch(error => {
            res.json({error: error, message: "Algo salió mal en el menu"})
            res.sendStatus(404)
        })
}

const createMenu = (req,res) => {
    Menus.findOne({name: req.body.name})
        .then(result => {
            if(result){
                res.json({error: true, message:"El nombre del plato ya se encuentra registrado"})
            } else {
                Menus.create(req.body)
                    .then(result => res.json({data: result}))
                    .catch(error => {
                        res.json({error: error, message:"Algo salió mal"});
                        res.sendStatus(500)
                    })
            }
        })
}

const updateMenu = (req, res) => {
    Menus.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(result => res.json({data: result}))
        .catch(error => {
            res.json({error: error, message: "Algo salió mal"});
            res.sendStatus(500);
        })
}

const deleteMenu = (req, res) => {
    Menus.deleteOne({_id: req.params.id})
        .then(result => res.json({data: result}))
        .catch(error => {
            res.json({error: error, message: "Algo salió mal"});
            res.json(202);
        })
}

module.exports = {findMenu, findSingleMenu, createMenu, updateMenu, deleteMenu};