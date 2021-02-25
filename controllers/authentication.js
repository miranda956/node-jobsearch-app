import db from "../models";
import passport from "passport";

const router=(app) =>{

app.patch('/api/update/password/:id',(req,res,next)=>{
db.Applicant.update({
    pwd:req.body.pwd,
    where:{
        email:req.user.email
    }
})


})

const authMiddleware = (req, res, next) => {
    if (!req.isAuthenticated()) {
      res.status(401).send('You are not authenticated')
    } else {
      return next()
    }
  }

passport.use(
    // @ts-ignore
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password"
      },
  
      (username, password, done) => {
        let user = user.find((user) => {
          return user.email === username && user.password === password
        })
  
        if (user) {
          done(null, user)
        } else {
          done(null, false, { message: 'Incorrect username or password'})
        }
      }
    )
  )
  app.get("/api/user", authMiddleware, (req, res) => {
    let user = users.find(user => {
      return user.id === req.session.passport.user
    })
  
    console.log([user, req.session])
  
    res.send({ user: user })
  })
  
  
app.post("/api/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return next(err);
      }
  
      if (!user) {
        return res.status(400).send([user, "Cannot log in", info]);
      }
  
      req.login(user, err => {
        res.send("Logged in");
      });
    })(req, res, next);
  });

  app.get("/api/logout", function(req, res) {
    req.logout();
  
    console.log("logged out")
  
    return res.send();
  });
  



}

module.exports=router;