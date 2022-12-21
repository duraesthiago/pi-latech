
//const { User } = require ('../database/models')

const loggedUserDataMiddleware =   async (req, res, next) => {
    res.locals.isLogged = false;

        // let emailInCookie = req.cookies.userEmail;
        // let userFromCookie =  await User.findOne({
        //     where:{
        //         Email: emailInCookie,
        //     }
        // });

        // if(userFromCookie) {
        //     req.session.isLogged
        // }
    

    if(req.session.userLogged) {
        res.locals.isLogged = true;
    }
    next()
}
module.exports = loggedUserDataMiddleware;