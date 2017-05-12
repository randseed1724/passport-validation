const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema(
  // 1st arg -> fields of the documents of this collection
  {
    // All users
    name: { type: String },

    // Traditional registration users
    username: { type: String },
    encryptedPassword: { type: String },

    // Login with Facebook users
    facebookID: { type: String },

    // Login with Google users
    googleID: { type: String }
  },

  // 2nd arg -> additional options
  {
    // Adds createdAt & updatedAt to documents
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);


module.exports = User;
