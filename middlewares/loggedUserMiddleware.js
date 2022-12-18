const loggedUserMiddleware = (req, res, next) => {
if(req.session.userLogged){
    res.redirect('/index')
}
    next()
}
module.exports = loggedUserMiddleware;
