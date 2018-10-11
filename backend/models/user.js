///models/User.js
var mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});
const User = mongoose.model("joseaugusto.User", UserSchema);
module.exports = User