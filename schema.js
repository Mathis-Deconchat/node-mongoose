const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  gl_username:  {
    type: String,
    required: true
  },
  test: String,
  gl_password:  {
    type: String,
    required: true
  },  
  is_active: {
    type: Boolean,
    required: true
  },
  date: { type: Date, default: Date.now }, 
});

exports.userSchema = userSchema