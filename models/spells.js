const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spellSchema = new Schema ({
    name: {type: String, required: true},
    level: {type: Number, required: true},
    school: {type: String, required: true},
    ritual: {type: String, required: true},
    time: [{type: Number, required: true}, {type: String, required: true}],
    rangeType: {type: String, required: true},
    rangeDistance: {type: Number, required: true},
    aoeType:{type: String},
    aoeSize:{type: Number},
    components: {type: String, required: true},
    materials: {type: String},
    // duration: {type: Number},
    // description: {type: String, required: true},
    // classes: {type: String, required: true} ,
    // diceRolls: {type: Number},
    // diceSides: {type: Number},
    // saveType: {type: String},
    // attackType: {type: String},
    // damageType: {type: String},
    // conditions: {type: String},
})

const Spell = mongoose.model('Spell', spellSchema);
module.exports = Spell;