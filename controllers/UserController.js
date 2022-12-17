const { validationResult } = require("express-validator");

const { User } = require("../database/models/");
const bcrypt = require("bcrypt");
const { JSON } = require("sequelize");

const UserController = {

  userLogin: (req, res) => {
    console.log(req.query.error);
    let error = "";
    if (req.query.error ==1){
      error = "Senha ou email não conferem."
    } else if(req.query.error==2) {
      error = "Já existe um cadastro para esse email. Deseja fazer login?"
    }
    res.render("userLogin", { error })
  },

  loginProcess: async (req, res) => {
    try {
      const userToLogin = await User.findOne({
        raw: true,
        where: {
          Email: req.body.email,
        },
      });

      let isPasswordVerified = await bcrypt.compareSync(
        req.body.password,
        userToLogin.Senha
      );

      if (!userToLogin) {
        return res.redirect("/users/signup?error=2");
      } else {
        if (!isPasswordVerified) {
          return res.redirect("/users/login?error=1");
        } else {
          if (userToLogin && isPasswordVerified) {
            delete userToLogin.Senha;
            req.session.userLogged = userToLogin;
            console.log(req.session);
            return res.redirect("/");
          }
        }
      }
    } catch (error) {
      return res.render("userSignUp", {error :"Não existe cadastro para esse email, deseja realizar um cadastro?."});
    }
  },

  recoverPassword: (req, res) => {
    res.render("recoverPassword");
  },

  showUserAccount: (req, res) => {
    res.render("userAccount");
  },
  signUp: (req, res) => {
    let error = req.query.error ? 1 : 0;
    res.render("userSignUp", { error });
  },

  signUpValidation: (req, res, next) => {
    const resultValidations = validationResult(req);
    if (resultValidations.errors.length > 0) {
      return res.render("userSignUp", {
        errors: resultValidations.mapped(),
        oldData: req.body,
      });
    }
  },

  createUser: async (req, res) => {
    let userExists = await User.findOne({
      raw: true,
      where: {
        Email: req.body.email,
      },
    });
    if (userExists) {
      res.redirect("/users/login?error=2");
    } else {
      await User.create({
        Nome: req.body.name,
        Email: req.body.email,
        Senha: bcrypt.hashSync(req.body.password, 10),
      });
      return res.redirect("/users/login");
    }
  },
};

module.exports = UserController;
