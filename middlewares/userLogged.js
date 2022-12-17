module.exports = async(req, res, next) =>{
    const userToLogin = await User.findOne({
        raw: true,
        where: {
          Email: req.body.email,
        },
    })
    req.session.userLogged = userToLogin
    next()
}
