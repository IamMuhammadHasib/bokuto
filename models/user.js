const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      unique: true,
      sparse: true,
    },
    phone: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,
    },
    otp: {
        type: String,
    },
    otpExpiresAt: {
        type: Date,
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('users', users);

module.exports = User;
