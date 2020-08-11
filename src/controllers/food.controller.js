'use strict'
const Combo = require('../models/combo.model');
const Saucer = require('../models/saucer.model');
const {uploadFile} = require('../services/upload.service');


const addSaucer = async(req, res)=>{
    let saucer = Saucer();
    let params = req.body;

    try{
        let saucerExists  = await Saucer.findOne({name: params.name});
        if(saucerExists){
            res.send({message: "La comida que desea agregar ya existe"});
        }else{
            uploadFile('saucers/', req.files.comboImage.name, req.files.comboImage.data).then
            saucer.name = params.name;
            saucer.description = params.description;
            saucer.ingredients = params.ingredients;
            saucer.price = params.price;

            let saucerAdded = await saucer.save();
            if(!saucerAdded){
                res.send({message: "Error al agregar la comida"}) 
            }else{
                res.send({message: "Comida agregada correctamente"+saucerAdded}) 
            }
        }
    } catch (err) {
        console.log(err);
        res.send({message: "Error en el servidor"});
    }
}

const addCombo = async(req, res)=>{
    const combo = Combo();
    const params = req.body;

    try {
        let comboExists  = await Combo.findOne({name: params.name});
        if(comboExists){
            res.send({message: "El combo que desea agregar ya existe"});
        }else{
            combo.name = params.name;
            combo.description = params.description;
            combo.ingredients= params.ingredients;
            combo.price = params.price;
            combo.photoUrl = `http://localhost:3800/images/combos/${req.file.filename}`;    // To do

            let comboAdded = await combo.save();
            if(!comboAdded){
                res.send({message: "Error al agregar el combo"});
            }else{
                res.send({message: "Combo agregado correctamente"+comboAdded});
            }
        }
    } catch (err) {
        console.log(err);
        res.send({message: "Error en el servidor"});
    }
}

const showSaucer = async(req, res)=>{
    try {
        let saucerFound = await Saucer.find({});
        if (!saucerFound){
            res.send({message: 'No se ha encontrado ningún plato'});

        }else{
            res.send({message: 'Estos son los platos: ', saucerFound});    
        }
    } catch (err) {
        console.log(err);
        res.send({message: 'Error en el servidor'});
    }
    
}

const showCombo = async(req, res)=>{
    try {
        let comboFound = await Combo.find({});
        if(!comboFound){
            res.send({message: 'No se ha encontrado ningún combo'});

        }else{
            res.send({message: 'Estos son los combos: ', comboFound});
        }
    } catch (err) {
        console.log(err);
        res.send({message: 'Error en el servidor'});
    }
}

const getSaucer = async(req, res)=>{
    try {
        let params = req.body;

        let saucerFound = await Saucer.find({'name': {$regex: params.search, $options: 'i'}});

        if(!saucerFound){
            res.send({message: 'No se ha encontrado ningún platillo'});

        }else{
            res.send({saucer: saucerFound});
        }
    } catch (err) {
        console.log(err);
        res.send({message: "Error en el servidor"});
    }
}

const getCombo = async (req, res)=>{
    try {
        let params = req.body;

        let comboFound = await Combo.find({'name': {$regex: params.search, $options: 'i'}});

        if(!comboFound){
            res.send({message: 'No se ha encontrado ningún combo'});

        }else{
            res.send({combos: comboFound});
        }
    } catch (err) {
        console.log(err);
        res.send({message: 'Error en el servidor'});
    }
}

module.exports ={
    addSaucer,
    addCombo,
    showSaucer,
    showCombo,
    getSaucer,
    getCombo
}
