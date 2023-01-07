module.exports = async(req, res, next) =>{
    const adminToLogin = await Admin.findOne({
        raw: true,
        where: {
          Email: req.body.emailAdmin,
        },
    })
    req.session.adminLogged = adminToLogin
    next()
}