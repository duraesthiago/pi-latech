module.exports = (req, res, next) => {
   res.locals = req.session
    next()
}