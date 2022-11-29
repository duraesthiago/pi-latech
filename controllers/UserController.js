const { validationResult } = require("express-validator");

const UserController = {

  userLogin: (req, res) => {
    res.render("userLogin");
  },

  doingLogin: (req, res) => {

  },


  showUserAccount: (req, res) => {
    res.render("userAccount");
  },

  signUp: (req, res) => {
    res.render("userSignUp");
  },

  signUpValidation: (req, res) => {
    const resultValidations = validationResult(req);
    if (resultValidations.errors.length > 0) {
      return res.render("userSignUp", {
        errors: resultValidations.mapped(),
        oldData: req.body,
      });
    }
  },
  logout: (req,res) => {
    
  }

  //   let userToCreate = {
  //     ...req.body,
  //     password: bcrypt.hashSync(req.body.psw, 10)
  //   }

  //   let userCreated = User.create(userToCreate);
  //   return res.redirect('/user/userLogin');
  // },
  
};

module.exports = UserController;
