

// const controller = {
//     showProducts: (req,res) => {res.send('Teste')}
// }
// module.exports = controller;

const controler = {
    showProducts: (req, res) => {
                res.render('products');
    }
}

module.exports = controler;
