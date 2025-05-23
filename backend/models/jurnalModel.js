const mongoose = require('mongoose');

const jurnalSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
    },
    images:{
        type: Array,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    likes:{
        type: Number,
        default: 0,
        required: true,
    },
    comments:{
        type: Array,
        default: [],
        required: true,
    },

}, {timestamps: true});

const jurnalCollection = mongoose.model('Jurnal', jurnalSchema);

module.exports = jurnalCollection;