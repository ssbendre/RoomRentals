var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var user = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    createdon: { type: Date, required: true, default: Date.now },
    modified: { type: Date, required: true, default: Date.now }
});

var users = mongoose.model("users", user);

module.exports = {
    Users: users
};
