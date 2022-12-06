module.exports = (req, res, next) => {
    let qty = 0
    if(req.session.cart){
        qty = req.session.cart.length
    }
    res.locals.qty = qty
    next()
}