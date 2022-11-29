const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spellSchema = new Schema ({
    name: {type: String, required: true},
    level: {type: Number, required: true},
    school: {type: String, required: true},
    ritual: {type: String, required: true},
    time: [],
    // range: [{type: String, required: true}, {type: Number, required: true}],
    // aoe:[{type: String}, {type: Number}],
    // components: {type: String, required: true},
    // materials: {type: String},
    // duration: [{type: String, required: true}, {type: Number}, {type: String}],
    // description: {type: String, required: true},
    // classes: [{type: String, required: true}] ,
    // roll: [{type: Number, type: String, type: Number, required: true}],
    // scale: [{type: Boolean}, {type: String}],
    // save: [{type: String}, {type: String}, {type: String}],
    // attack: [{type: Boolean}, {type: String}], 
    // damage: {type: String},
    // conditions: {type: String},
})

const Spell = mongoose.model('Spell', spellSchema);
module.exports = Spell;