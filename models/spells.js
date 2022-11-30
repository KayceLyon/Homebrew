const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spellSchema = new Schema ({
    name: {type: String},
    level: {type: Number},
    school: {type: String},
    ritual: {type: String},
    castingTime: {type: Number},
    castingType: {},
    // range: [{type: String, }, {type: Number, }],
    // aoe:[{type: String}, {type: Number}],
    components: [String],
    materials: {type: String},
    durationType: {type: String, }, 
    duration: {type: Number}, 
    length: {type: String},
    description: {type: String},
    classes: [String],
    diceCount: [Number],
    roll: [],
    scale: {type: Boolean}, 
    scalingType: {type: String},
    saveThrow: {type: String}, 
    missedSave: {type: String}, 
    successSave: {type: String},
    failSave: {type: String}
    // attack: [{type: Boolean}, {type: String}], 
    // damage: {type: String},
    // conditions: {type: String},
})

const Spell = mongoose.model('Spell', spellSchema);
exports.submit
module.exports = Spell;