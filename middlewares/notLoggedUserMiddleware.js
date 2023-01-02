
const notLoggedUserMiddleware =  (req, res, next) => {
if (!req.session.userLogged) {
    return res.redirect('/index');
}
next()
}
module.exports = notLoggedUserMiddleware;