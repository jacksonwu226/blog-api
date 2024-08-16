const passport = require('passport')
const prisma = require('../db/prisma')
const LocalStrategy = require('passport-local').Strategy;

passport.use(
  new LocalStrategy(async(username,password, done) => {
    try{
      const user = await prisma.user.findFirst({
        where: {username},
      });

      if(!user){
        return done(null, false, {message: 'User not found'});
      }

      if(user.password !== password){
        return done(null, false, {message: "Incorrect password"});
      }
      return done(null, user);
    }catch(err){
      return done(err);
    }
  })
)

passport.serializeUser((user,done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try{
    const user = await prisma.user.findFirst({
      where : {id},
    })
    done(null, user);
  }catch(err){
    done(err);
  }
})