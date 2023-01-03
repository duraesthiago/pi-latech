const { Op } = require("sequelize");
const { validationResult } = require("express-validator");
const { Admin, User, Product, Image, Brand, Category } = require("../database/models");
const bcrypt = require("bcrypt");
const { raw } = require("express");

const AdminController = {

  main: async (req, res) => {

    res.render("mainAdmin");
  },

  signUp: (req, res) => {
    //let error = req.query.error ? 1 : 0;
    res.render("adminSignUp");
  },


  createAdmin: async (req, res) => {
    const resultValidations = validationResult(req);
    if (resultValidations.errors.length > 0) {
      return res.render("adminSignUp", {
        errors: resultValidations.mapped(),
        oldAdminData: req.body,
      });
    }

    let adminExists = await Admin.findOne({
      raw: true,
      where: {
        Email: req.body.emailAdmin,
      },
    });
    if (adminExists) {
      res.redirect("/admin/login");
    } else {
      const adminCreated = await Admin.create({
        Name: req.body.nameAdmin,
        Email: req.body.emailAdmin,
        WorkerId: req.body.workerAdmin,
        Password: bcrypt.hashSync(req.body.passwordAdmin, 10),
      });
      //console.log(req.body);
      //console.log(adminCreated);
      return res.redirect("/admin/login");
    }
  },

  adminLogin: (req, res) => {
    //   let error = "";
    //   if (req.query.error == 1) {
    //     error = "Senha ou email não conferem.";
    //   } else if (req.query.error == 2) {
    //     error = "Já existe um cadastro para esse email. Deseja fazer login?";
    //   }
    res.render("adminLogin");
  },

  adminLoginProcess: async (req, res) => {
    try {
      const adminToLogin = await Admin.findOne({
        raw: true,
        where: {
          Email: req.body.emailAdmin,
        },
      });

      let isPasswordVerified = bcrypt.compareSync(
        req.body.passwordAdmin,
        adminToLogin.Password
      );

      if (!adminToLogin) {
        return res.redirect("/admin");
      } else {
        if (!isPasswordVerified) {
          return res.redirect("/admin");
        } else {
          if (adminToLogin && isPasswordVerified) {

            delete adminToLogin.Password;
            req.session.adminLogged = adminToLogin;
            //console.log(req.session.adminLogged);
            //console.log(adminToLogin);
          }

          if (req.body.remember_admin) {
            res.cookie("adminEmail", req.body.emailAdmin, {
              maxAge: (1000 * 60) * 30
            });
          }
          if (!req.body.remember_admin) {
            res.cookie("adminEmail", req.body.email, {
              maxAge: (1000 * 60) * 5

            });
          }

          res.redirect("/admin/panel");
        }
      }
    } catch (error) {
      return res.render("adminSignUp", {
        error:
          "Não existe cadastro para esse email, deseja realizar um cadastro?.",
      });
    }
  },

  adminEditUser: (req, res) => {
    res.render("adminEditUser")
  },

  getUsers: async (req, res) => {
    const usersList = await User.findAll({raw: true})
    return res.render('usersList', { usersList })
  },

  adminEditUser: (req, res) => {
    res.render("adminEditUser")
  },

  updateUser: async (req, res) => {
    let userId = req.params.id;
    let user = await User.findByPk(userId);

    if (user)
      res.render("updateUser", { user });
    //console.log(user)

  },

  updateUserData: async (req, res) => {
    let user = await User.update(
      {
        Nome: req.body.name,
        Sobrenome: req.body.lastName,
        Email: req.body.email,
        Cpf: req.body.personal_id,
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
    return res.redirect('/admin')
  },

  showAdminPanel: (req, res) => {
    res.render("adminPanel")
  },

  adminShowProduct: async (req, res) => {
    let products = await Product.findAll({
      raw: true,
      include: [{
        model: Image, as: 'images',
      }]
    });
    res.render("adminProduct", { products });
  },

  adminSearchProduct: async (req, res) => {
    let s = req.query.search;
    let products = await Product.findAll({
      raw: true,
      include: [{
        model: Image, as: 'images',
      }],
      where: {
        Nome: {
          [Op.like]: `%${s}%`
        }
      }
    })

    res.render("adminProduct", { products });
  },

  adminShowOneProduct: async (req, res) => {
    let id = req.params.id;
    let product = await Product.findByPk(id, {
      raw: true,
      include: [
        { model: Image, as: 'images' },
        { model: Brand, as: 'brands' },
        { model: Category, as: 'categories' }
      ]
    });

    let brands = await Brand.findAll({ raw: true });

    res.render('adminEditProduct', { product, brands });
  },

  adminEditProduct: async (req, res) => {
    let id = req.params.id;

    console.log(req.body);

    let product = await Product.findByPk(id);
    product.set({
      Nome: req.body.Nome,
      Preco: req.body.Preco,
      PrecoComDesconto: req.body.PrecoComDesconto,
      Marcas_id: req.body.idMarcas,
      Oferta: req.body.Oferta,
      Status: req.body.Status,
      Informacoes: req.body.Informacoes
    });

    await product.save();

    res.redirect('/admin/adminProduct');
  },

  adminShowCreateProduct: async (req, res) => {
    let brands = await Brand.findAll({ raw: true });
    let category = await Category.findAll({ raw: true });
    res.render('adminCreateProduct', { brands, category });
  },

  adminCreateProduct: async (req, res) => {
    const newProduct = await Product.create({
      Nome: req.body.Nome,
      Codigo: req.body.Codigo,
      Preco: req.body.Preco,
      PrecoComDesconto: req.body.PrecoComDesconto,
      Oferta: req.body.Oferta,
      Status: req.body.Status,
      Marcas_id: req.body.idMarcas,
      Categorias_id: req.body.Categoria,
      Informacao: req.body.Informacoes
    })

    const newImage = await Image.create({
      Nome: "Default Image",
      Data_Upload: "07/12/2022",
      Imagem: "/img/default-img.jpg",
      Produtos_idProdutos: newProduct.idProdutos,
      Marcas_idMarcas: newProduct.Marcas_id
    });

    return res.redirect('/admin/adminProduct');

  },

  adminDeleteProduct: async (req, res) => {
    let id = req.params.id;

    let product = await Product.findByPk(id);
    if (product.Status == 1) {
      product.set({
        Status: 0,
      });
    } else {
      product.set({
        Status: 1,
      });
    };
    await product.save();

    res.redirect('/admin/adminProduct');
  },

  logoutAdmin: (req, res) => {
    req.session.destroy();
    res.clearCookie("AdminEmail");
    return res.redirect("/");
  },
}
module.exports = AdminController;