const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  firstName: {type: String, required: true},
  middleName: {type: String},
  lastName: {type: String, required: true},
  militaryRank: {type: String},
  militaryPosition: {type: String},
  birthDate: {type: Date},
  photo: {type: String},
  biography: {type: String}
});

module.exports = model('Hero', schema);