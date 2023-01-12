module.exports = (req, res, next) => {
    let qty = 0
    if(req.session.cart){
        qty = req.session.cart.length
    } else {
        req.session.cart = ""
    }
    res.locals.qty = qty
    next()
}