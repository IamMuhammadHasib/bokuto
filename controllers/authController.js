const User = require("../models/user");

class AuthController {
  static getLogin(req, res) {
    res.json("Login page.");
  }

  static postLogin(req, res) {
    const { emailOrPhone } = req.body;
    res.send(`Login post request has: ${emailOrPhone}.`);
  }

  static getRegister(req, res) {
    res.json("Register page.");
  }

  static async postRegister(req, res) {
    const { name, email, phone } = req.body;
    const user = new User({ name, email, phone });

    try {
      const savedUser = await user.save();
      res.status(201).send(`User registered: ${savedUser}`);
    } catch (error) {
      console.log("Error saving user: ", error);
      res.status(500).send(`Error registering user: ${error}`);
    }
  }
}

module.exports = AuthController;
