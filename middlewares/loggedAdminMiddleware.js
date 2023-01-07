
const loggedAdminMiddleware = (req, res, next) => {
    if(req.session.adminLogged){
        return res.redirect('/admin')
    }
        next()
    }
    module.exports = loggedAdminMiddleware;
    