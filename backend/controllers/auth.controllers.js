const User = require('../models/auth.model');

const jws = require('jsonwebtoken');

const catchAsyncErrors = require('../utils/catchAsyncErrors.js');

const secret = '46tydvh785#454'; //secret for hour token

exports.login = catchAsyncErrors(async (req, res) => {
  const { email, password } = req.body;

  // 1. Check if email and password are present
  if (!email || !password) {
    return res.status(400).send({
      message: 'enter email & password ',
    });
  }

  // 2. Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send({
      message: 'invalid email',
    });
  }

  // Checks if password is correct or not
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    return res.status(401).send({
      message: 'invalid password',
    });
  }

  // to generate token , encrypt email and password, only admin can know the details
  const token = jws.sign({ email: user.email, id: user._id }, secret);

  const userDetails = await User.findById(user._id).select('-password');

  res.status(200).send({
    message: 'loggedIn successfully',
    payload: { user: userDetails, token },
  });
});

exports.register = catchAsyncErrors(async (req, res) => {
  const existingUser = await User.findOne({ email: req.body.email });

  if (existingUser) {
    return res.status(400).send({
      message: 'Email already exists',
    });
  }

  console.log(req.body);
  const userData = await new User(req.body);
  userData.save();
  res.status(200).send({
    message: 'Success',
    payload: { user: userData },
  });
});
