var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var owner = new Schema({
  name: { type: String, required: true, trim: true },
  contact: { type: Number, required: true, trim: true },
  createdon: { type: Date, required: true, default: Date.now },
  modified: { type: Date, required: true, default: Date.now }
});

var owners = mongoose.model("owners", owner);

var rooms = new Schema({
  description: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  rent: { type: Number, required: true, trim: true },
  owner: { type: Schema.Types.ObjectId, ref: 'owners' }
});

var rooms = mongoose.model("rooms", rooms);

module.exports = {
  Owners: owners,
  Rooms: rooms
};
