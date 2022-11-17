const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spellSchema = new Schema ({
    name: {type: String, required: true, unique: true},
    level: {type: Number, required: true},
    school: {type: String, required: true} ,
    ritual: Boolean,
    castingTime: Number,
    range: Number,
    components: Boolean ,
    materials: [String],
    duration: Number,
    description: {type: String, required: true},
    classes: [{type: String, required: true}] ,
    diceRolls: {numOfDice: Number, numOfSides: Number},
    saveType: String,
    attackType: String,
    damageType: String,
    conditions: String,
})

const Spell = mongoose.model('Spell', spellSchema);
module.export = Spell;