'use strict'

const dotenv = require('dotenv');
dotenv.config();

var mongoose = require('mongoose');
var port = 3800;
var app = require('./app');
const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert({
        'project_id': process.env.FIREBASE_PROJECT_ID,
        'private_key': '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC2PQNFqGgqU4oO\nrmcEZKlv6NbsRbMm+I0nUvXZHMZA0cdUDbktRUQ1fP6EC0dX+UFI/ac6gom/AfE2\nGDPLPoFwGVNJjfGAUyNP6uXn7PEUEavpFftLKAnDxJpN309usto26/GzUR74TIpQ\nTcTCdX68Mi4BEcCEzILbp4hHWWlTMyA6b+tQqR2sgwKfDlp2R7hMWd26QUFNoNpV\nE05f+QX30q7okDmX+Rzw3riPmRG9QI/HiG5gFTuvzbhPhYO/5vdnjO6CcgCxWcQe\nSrzW9cuQzW3/NKqukbKI3oJJExcY1o5zpUMnfSBWYEfm1wIj0DdCEcp36u8THH7B\nIl/o8tSHAgMBAAECggEALOBQbnZelFG3FQ9wcd4B9XtudYdiaw3Y4J6myNyzm2Gt\nRq8Mcy/z8IIDwOtwGaNZJsrDw/5CQmWNiychlgKh6ENsRZgtKM8QSo1LKTYpVapW\nXZMaqzLEWM+Que1sR5PGdbDbd69Zw4ZBpy3HbqV1XI2003GWKX2dGc8jGYLUk3Z/\nN7lbmR0bPtf6OoIwQ2idbN81DKUanKKyjgpilW8RKxhlIzYROucYxYaApywZJ6LZ\nCJvF6kzte+uisYl8uE0vMci34GbJI/Ol1C957xIWbiTfaZO4wvj1V69rByaRDo+1\nmDuOtXrHOcw3wrxVp9TtzExHlfghN9dgisMHLJ5XgQKBgQD+/7hVrFboqd+hQjBZ\nJCbIQc5a+2BgItmx7HeFatQo9+0jsu30qTg8Iu4b1sMyIjmtmArcSUEli8nU9UwA\nu4MvEuq0jUE/78DTHGmTanTqPAD2baEDXpxikxHJ+FW2tdm5CC66uWht2+/NiTdl\nTTBTJWnwRfkZwAAsYWDq4icIgQKBgQC29CqnwezzKDqveIp94YuPtREXd/Y8DndR\nYtfpGShoLyaNppKtW3B7t7AoxVrkjQ9LxrRkSNSEqI/ZyNUStnEprChPp/HLFD7S\nMFQd6CMLYSqyzwTN/5QZzXsEDPsUPmVn7bF6x5IGaBRGcqfpGoHyu9YmQLOTw738\n+6Uou40ZBwKBgQDuUI21O/CpVwGSUyqeVMQOCjpSG3axwkBUIZx+Sx3m//ZXk8UC\nEBhnU3nW+LrKouPm0h7sS2YgMem6JloWoSh0GSjS/uTJXUeHxZkB1c9YjiWUKVb+\nsDBVi/9nE7j/nirR28zYY6kuawtNuvzTpvUP7/p3PN4Wa7N9xrBuNFeogQKBgH/n\nOT7ow3fHAygTVHbmzIPeKSHIGxwnXOFIAfwTO32CoShccKTDjWLgq0YFmyK3Px9R\nvmFxzSklEtRFpDid1YU1t0Tg+5hnAfg+E0CJPp7BAnHZatl9ORPE5KCTVqDzcj9z\nHCXjCcJy1uHdXGgJwRlqmi9KAoFmUhdf8joEzILXAoGAfLMBmXH/q2qtVruSfkFm\nA71A/huSWOvt5lf+dm+YIOZZt4wRiPxwxcB/bM9Ker1V1nd4wZsQxiYwkltmqyJr\ngVKrzTxQzidvX2o7//vKkBhL5gSf4rdI7tC8BvJnKc6tR6yJOeWwf74LNr4gfe0A\nSBgB5WHP+UfLwyHwJbDb2Kc=\n-----END PRIVATE KEY-----\n'.replace(/\n/g, '\n'),
        'client_email': process.env.FIREBASE_CLIENT_EMAIL
    })
})

mongoose.connect('mongodb://localhost:27017/AntojitosMartita', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false})
.then(()=>{
    console.log('Conexión a la DB correcta');
    app.listen(port, ()=>{
        console.log('Servidor de express corriendo', port);
    });
}).catch( err=>{
    console.log('Error al conectarse', err);
});
