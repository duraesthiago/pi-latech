

const notLoggedAdminMiddleware =  (req, res, next) => {
    if (!req.session.adminLogged) {
        return res.redirect('/admin/main');
    }
    next()
    }
    module.exports = notLoggedAdminMiddleware;