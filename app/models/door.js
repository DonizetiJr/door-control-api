// Assuming you store the library in a var called mongoose
var mongoose = require('mongoose');

// Just add bluebird to your package.json, and then the following line should work
mongoose.Promise = require('bluebird');

let schema = mongoose.Schema({

    state: {
        type: Boolean,
        required: true
    },

    name: {
        type: String,
        required: true
    }
});

mongoose.model('Door', schema);