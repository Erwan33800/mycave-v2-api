const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId; // methode qui permet de recuperer l'id 

const { BouteillesModel } = require('../models/bouteillesModel');

router.get('/', (req, res) => {
    BouteillesModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
});

router.post('/', (req, res) => {
    const newBouteilles = new BouteillesModel({
        name: req.body.name,
        year: req.body.year,
        cepage: req.body.cepage,
        country: req.body.country,
        region: req.body.region,
        description: req.body.description
    });

    newBouteilles.save((err,docs) => {
        if(!err) res.send(docs);
        else console.log("Error creating new data : " + err);
    });
});

router.put('/:id', (req, res) => {
    // verifie si l'id du user est present dans la db
    if(!ObjectId.isValid(req.params.id)) {
        return res.send.status(400).send("ID unknown : " + req.params.id);
    };

    const updateBouteille = {
        name: req.body.name,
        year: req.body.year,
        cepage: req.body.cepage,
        country: req.body.country,
        region: req.body.region,
        description: req.body.description
    };

    BouteillesModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateBouteille },
        { new: true },
        (err, docs) => {
            if(!err) res.send(docs);
            else console.log("Update error : " + err);
        }

    );
});

router.delete('/:id', (req, res) => {
    // verifie si l'id du user est present dans la db
    if(!ObjectId.isValid(req.params.id)) {
        return res.send.status(400).send("ID unknown : " + req.params.id);
    };

    BouteillesModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if(!err) res.send(docs);
            else console.log("Delete error : " + err);
        }
    )

})

module.exports = router;