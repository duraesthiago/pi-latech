const { validationResult } = require("express-validator");

const db = require("../database/models/User.js");

const UserController = {

  userLogin: (req, res) => {
    res.render("userLogin");
  },

  doingLogin: (req, res) => {

  },
  forgotPassword: (req, res) => {
    res.render("forgotPassword");
  },

  recoverPassword: (req, res) => {

  },

  showUserAccount: (req, res) => {
    res.render("userAccount");
  },

  signUp: (req, res) => {
    res.render("userSignUp");
  },

  //  registerUser: (req, res) => {
  //   db.User.create({
  //     name:req.body.name,
  //     email:req.body.email,
  //     password:req.body.password
  //   })
  //   .then(() => res.redirect('./user/login'))
  //   .cathc((error) => res.status(500) (error.msg))
  // },
  
  
   signUpValidation:  (req, res) => {
      const resultValidations = validationResult(req);
      if (resultValidations.errors.length > 0) {
        return res.render("userSignUp", {
          errors: resultValidations.mapped(),
          oldData: req.body,
        });
      }
    }

  
}
    // essa fução vem da model User e verifica se o email já está cadastrado
//     const userExists = User.findUserByField('email', req.body.email)
//        if(userExists){
//        return res.render('userSingUp', {
//        errors: {
//            email: {
//             msg: 'Este email já está registrado'
//            }
//         },
//          oldData: req.body
//      });
//     }
    
//     const createUser = {
//         ...req.body,
//         password: bcrypt.hashSync(req.body.password, 10)
//       }
  
//       let userCreated = User.create(createUser);
//       //return res.redirect('/user/userLogin');
//       return res.send('usuario criado foi, véia padawan')
//       //returm res.redirect(/user/login); depois que salvou o usuário redireciona para o login
    

//   // logout: (req,res) => {

//   // }

  


module.exports = UserController;








