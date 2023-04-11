const mongoose = require('mongoose');

const bcrypt = require('bcryptjs'); // install bcryptjs

const { Schema } = mongoose;

const userSchema = Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, require: true },
  name: { type: String },
  createdAt: { type: Date, default: Date.now() },
});

// Encrypting password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// 2nd step Compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('users', userSchema);

module.exports = User;
