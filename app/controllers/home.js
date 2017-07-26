const mongoose = require('mongoose');

const door = mongoose.model('Door');

let controller = {};

controller.showState = (req, res) => {
    
    door
        .find({})
        .then(state => {
            res.json(state);
        }, err => {
            console.log(err);
            res.status(500).json(err);
        });

};

controller.changeState = (req, res) => {

    door
        .findByIdAndUpdate(req.params.id, req.body)
        .then(state => {
            res.json(state);
        }, err => {
            console.log(error);
            res.status(500).json(err);
        });
}



module.exports = controller;