const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  githubId: String,
  username: String
});


mongoose.model('users', userSchema);
