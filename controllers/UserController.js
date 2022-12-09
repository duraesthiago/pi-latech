const { validationResult } = require("express-validator");

const {User}= require("../database/models");
const bcrypt = require('bcrypt');

const UserController = {

  userLogin: (req, res) => {
    res.render("userLogin");
  },

  doingLogin: (req, res) => {},
  forgotPassword: (req, res) => {
    res.render("forgotPassword");
  },

  showUserAccount: (req, res) => {
    res.render("userAccount");
  },

  signUp: (req, res) => {
    res.render("userSignUp");
  },

  signUpValidation:  (req, res, next) => {
    const resultValidations = validationResult(req);
    console.log(resultValidations);
    if (resultValidations.errors.length > 0) {
      return res.render("userSignUp", {
        errors: resultValidations.mapped(),
        oldData: req.body,
      });
    } 
  },

  createUser: async (req, res) => {
  const newUser = await User.create({
      Nome: req.body.name,
      Email: req.body.email,
      Senha: bcrypt.hashSync(req.body.password, 10),
    })
    return res.redirect('/users/login')
  },

  // getUsers: (req, res) => {
  //   db.User.findAll().then(function (allUsersList) {
  //     return cosole.log(allUserList); 
  //   });
  // },
}

module.exports = UserController;
