'use strict'

const express = require('express');
let api = express.Router();
const foodController = require('../controllers/food.controller');

const { v4: uuidv4 } = require('uuid'); 
const multer= require('multer')
const path = require('path');



const Storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.resolve('public', 'images', 'saucers'))
    },
    filename: (req, file, cb)=>{
        cb(null, `${uuidv4()}.${file.originalname.split('.').pop()}`);
    }
});

const comboStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.resolve('public', 'images', 'combos'))
    },
    filename: (req, file, cb)=>{
        cb(null, `${uuidv4()}.${file.originalname.split('.').pop()}`);
    }
});


const uploadTask = multer({storage: Storage});
const uploadComboTask =multer({storage: comboStorage});

api.post('/addSaucer', foodController.addSaucer);
api.post('/addCombo', uploadComboTask.single('comboImage'), foodController.addCombo);
api.get('/showSaucer', foodController.showSaucer);
api.get('/showCombo', foodController.showCombo);
api.get('/getSaucer', foodController.getSaucer);
api.get('/getCombo', foodController.getCombo);

module.exports = api
