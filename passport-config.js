const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport){
    const authenticateUser = async (uname, psw,done) => {
        const user = getUserByName(uname)
        if (user == null){
            return done(null, false, {message: 'No user with that Username'})
        }

        try{
            if (await bcrypt.compare(psw, user.psw)) {
                return done(null, user)
            }else{
                return done(null ,false,{ message: 'Password Incorrect'})
            }
        } catch (e) {
            return done(e)
        }
    }

    passport.use(new LocalStrategy({usernameField: 'uname'}, 
    authenticateUser))
    passport.serializeUser((user,done) => { })
    passport.deserializeUser((id,done) => { })

}

module.exports = initialize