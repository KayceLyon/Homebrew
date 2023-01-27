const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const armorSchema = new Schema ({
    name: {type: String, required: true},
    // type: {type: String},
    // weight: {type: Number},
    // cost: {type: Number},
    // currency: {type:String},
    // property: {type: String},
    // stealth: {type: String},
    // armorClass: {type: Number},
    // description: {type: String} 
})

const Armor = mongoose.model('Armor', armorSchema);
module.exports = Armor;