const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const characterSchema = new Schema({
  name: String,
  occupation: String,
  weapon: String,
  debt: Boolean
});

const Character = model("Character", characterSchema);

module.exports = Character;
