// register: (req, res) => {
//     db.User.create(createUser = {
//           ...req.body,
//           password: bcrypt.hashSync(req.body.password, 10)
//         })

//   }
    //   signUpValidation:  (req, res) => {
    //   const resultValidations = validationResult(req);
    //   if (resultValidations.errors.length > 0) {
    //     return res.render("userSignUp", {
    //       errors: resultValidations.mapped(),
    //       oldData: req.body,
    //     });
    //   }
    // }

  //   // logout: (req,res) => {
     // }

  //  registerUser: (req, res) => {
  //   db.User.dindAll()
  //     name:req.body.name,
  //     email:req.body.email,
  //     password:req.body.password
  //   })
  //   .then(() => res.redirect('./user/login'))
  //   .cathc((error) => res.status(500) (error.msg))
  // },
  
  
    
    //       let userCreated = User.create(createUser);
    //       //return res.redirect('/user/userLogin');
    //       return res.send('usuario criado foi, véia padawan')
    //       //returm res.redirect(/user/login); depois que salvou o usuário redireciona para o login
  
  

// essa fução vem da model User e verifica se o email já está cadastrado
// const userExists = User.findUserByField('email', req.body.email)
// if(userExists){
//   return res.render('userSingUp', {
//     errors: {
//       email: {
//         msg: 'Este email já está registrado. Deseja fazer login?'
//       } else {
  
// }
//     },
//     oldData: req.body
//   });
// }

  
  
