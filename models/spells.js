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
    // duration: [{type: String, }, {type: Number}, {type: String}],
    // description: {type: String, },
    // classes: [{type: String, }] ,
    // roll: [{type: Number, type: String, type: Number, }],
    // scale: [{type: Boolean}, {type: String}],
    // save: [{type: String}, {type: String}, {type: String}],
    // attack: [{type: Boolean}, {type: String}], 
    // damage: {type: String},
    // conditions: {type: String},
})

const Spell = mongoose.model('Spell', spellSchema);
exports.submit
module.exports = Spell;