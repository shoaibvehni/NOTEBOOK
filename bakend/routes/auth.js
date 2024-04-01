const express = require('express');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middlevare/fetchuser');

const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

const JWT_SECRET = 'haryyisbro'; // Corrected JWT Secret Key

router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Enter a valid password').isLength({ min: 3 })
], async (req, res) => {
  let success= false
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    
    return res.status(400).json({ success, errors: errors.array() });
  }

  try {
    // Check if email already exists
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      success = false;
      return res.status(400).json({ success, error: "User with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const secpaswrd = await bcrypt.hash(req.body.password, salt);

    // Create new user
    user = await User.create({
      name: req.body.name,
      password: secpaswrd,
      email: req.body.email,
    });

    const data = {
      user: {
        id: user.id
      }
    };
    const authtoken = jwt.sign(data, JWT_SECRET);
    console.log(authtoken);
    success = true;
    res.json({ success, message: "User created successfully", authtoken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// LOGIN
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Enter cannot be blank').exists()
], async (req, res) => {
let  success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false;
      return res.status(400).json({  success, error: "Invalid email credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({   success , error: "Invalid paswrod credentials" });
  
    }

    const data = {
      user: {
        id: user.id
      }
    };
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, message: "User login successfully", authtoken });

  } catch (error) { // Corrected error variable name
    console.error(error.message); // Corrected error variable name
    res.status(500).send('Server login Error');
  }
});
// getuserdetail

router.post('/getuserdetail', fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server login Error');
  }
});
module.exports = router;
