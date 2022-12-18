const userLoggedMiddleware = async(req, res, next) =>{
    const userToLogin = await User.findOne({
        raw: true,
        where: {
          Email: req.body.email,
        },
    })
    req.session.userLogged = userToLogin
if(req.session.userLogged){
    resizeBy.redirect('/index')
}
    next()
}
module.exports = userLoggedMiddleware;
