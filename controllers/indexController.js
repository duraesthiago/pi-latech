const IndexController = {
  index: (req, res) => {
    res.render("index", { title: "Latech" });
  },
  aboutUs: (req, res) => {
    res.render("aboutUs");
  },
  search: (req, res) => {},
  showProduct: (req, res) => {
    let id = req.params.id;
    // verificar nome da tabela produtos
    let product = products.find((p) => p.id === id);
    // verificar sequelize
    res.render("produto.ejs", { product });
  },
  showCart: (req, res) => {
    let userLoggedIn = req.session.user !== undefined;
    if (!req.session.products) {
      productsInTheCart = [];
      res.render("cart.ejs");
    } else {
      let productsInTheCart = req.session.products.map((id) =>
        products.find((p) => p.id == id)
      );
      res.render("cart", { productsInTheCart, userLoggedIn });
    }
  },
  addCart: (req, res) => {
    if (req.session.products) {
      req.session.products.push(req.body.productChosen);
    } else {
      req.session.products = [req.body.productChosen];
    }
    res.redirect("/products");
    console.log(req.session);
  },

};

module.exports = IndexController;
