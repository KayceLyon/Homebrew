const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema ({
    name: {type: String, required: true},
    // level: {type: Number, required: true},
    // school: {type: String, required: true} ,
    // ritual: {type: String},
    // castingTime: {type: Number},
    // range: {type: Number},
    // components: {type: String},
    // materials: {type: String},
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

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;