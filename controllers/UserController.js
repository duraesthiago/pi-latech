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
    // let userExists = User.findUserByField('email', req.body.email)....essa fução vem da model User e verifica se o email já está cadastrado
    //   if(userExists){
      // return res.render('userSingUp', {
      //   errors: {
      //     email: {
      //       msg: 'Este email já está registrado
      //     }
      //   },
      //   oldData: req.body
      // });
    //}
    
    //let userToCreate = {
    //     ...req.body,
    //     password: bcrypt.hashSync(req.body.password, 10)
    //   }
  
    //   let userCreated = User.create(userToCreate);
    //   return res.redirect('/user/userLogin');
    // },
    // return res.send('usuario criado foi, véia padawan')
    //returm res.redirect(/user/login); depois que salvou o usuário redireciona para o login
  },

  logout: (req,res) => {

  }

  
};

module.exports = UserController;
