const { validationResult } = require("express-validator");
const { User } = require("../database/models/");
const bcrypt = require("bcrypt");

const UserController = {

  signUp: (req, res) => {
    let error = req.query.error ? 1 : 0;
    res.render("userSignUp", { error });
  },

  createUser: async (req, res) => {
    const resultValidations = validationResult(req);
    if (resultValidations.errors.length > 0) {
      return res.render("userSignUp", {
        error: undefined,
        errors: resultValidations.mapped(),
        oldData: req.body,
      });
    }

    let userExists = await User.findOne({
      raw: true,
      where: {
        Email: req.body.email,
      },
    });
    if (userExists) {
      res.redirect("/users/login?error=2");
    } else {
      let avatarFileName = req.file.filename;
      const userCreated = await User.create({
        Nome: req.body.name,
        Sobrenome: req.body.last_name,
        Email: req.body.email,
        Telefone: req.body.phone_number,
        Avatar: `/img/avatars/${avatarFileName}`,
        Cpf: req.body.personal_id,
        Senha: bcrypt.hashSync(req.body.password, 10),
        admin_idAdmin: 1 //Verificar como tratar isso
      });
      return res.redirect("/users/login");
    }
  },

  userLogin: (req, res) => {
    let error = "";
    if (req.query.error == 1) {
      error = "Senha ou email não conferem.";
    } else if (req.query.error == 2) {
      error = "Já existe um cadastro para esse email. Deseja fazer login?";
    }
    res.render("userLogin", { error });
  },

  loginProcess: async (req, res) => {
    try {
      const userToLogin = await User.findOne({
        raw: true,
        where: {
          Email: req.body.email,
        },
      });

      let isPasswordVerified = bcrypt.compareSync(
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
            console.log(req.session.userLogged);
          }

          if (req.body.remember_user) {
            res.cookie("userEmail", req.body.email, {
              maxAge: (1000 * 60) * 60
            });
          }
          if (!req.body.remember_user) {
            res.cookie("userEmail", req.body.email, {
              maxAge: (1000 * 60) * 30

            });
          }
          let url = req.session.cart ? "/orders/payment" : "/";
          console.log("🚀 ~ file: UserController.js:95 ~ loginProcess: ~ req.session.cart", req.session.cart)
          console.log("🚀 ~ file: UserController.js:95 ~ loginProcess: ~ url", url)
          res.redirect(url);
        }
      }
    } catch (error) {
      return res.render("userSignUp", {
        error:
          "Não existe cadastro para esse email, deseja realizar um cadastro?.",
      });
    }
  },

  recoverPassword: (req, res) => {
    res.send("Um email foi enviado para sua caixa Postal para recuperar sua senha.");
  },

  showUserAccount: async (req, res) => {
    res.render("userAccount", {
      userLogged: req.session.userLogged,
    });
  },



  updateUser: async (req, res) => {
    let userId = req.params.id;
    let userLogged = await User.findByPk(userId);

    if (userLogged)
      res.render("updateUser", {
        userLogged
      });
    //console.log(userLogged)

  },

  updateUserData: async (req, res) => {
    let userLogged = await User.update(
      {
        Nome: req.body.name,
        Sobrenome: req.body.lastName,
        Telefone: req.body.phone,
        Avatar: req.body.avatar,
      },
      {
        where: {
          idUser: req.params.id
        }
      }
    )
    //   console.log(userLogged)
    //  console.log(req.body);
    //  console.log(req.params.id);
    return res.redirect('/')
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("userEmail");
    return res.redirect("/");
  },

  deleteUser: async (req, res) => {
    await User.destroy(
      {
        where: {
          idUser: req.params.id
        }
      }
    )
    req.session.destroy();
    return res.redirect('/')
  }
};

module.exports = UserController;
