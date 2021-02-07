import db from "../models";
import passport from "passport";
function isadmin(req,res,next){
    if(req.user.isadmin)
      return next();
    
    res.redirect('/admin/login')
}
function router (app){
    app.get('/admin',(req,res)=>{
        res.redirect('/admin/login')
    });
    app.get('/admin/login',(req,res)=>{
        res.redirect('/recruiter/login')
    });
    app.post('/admin/login',passport.authenticate('local-signup',{
        successRedirect:'admin/menu',
        failureRedirect:'admin/login'
    }))
    // logout -- function
    app.get('/admin/logout',isadmin,(req,res,next)=>{
        req.session.destroy((err)=>{
            next(err);
            res.redirect('/admin/login')

        })
    })

    
app.get ("/all/admins",(req,res,next)=>{
        db.User.findAll({
            attributes:["email","f_name","l_name"]
        }).then((admins)=>{
res.json(admins)
        }).catch((err)=>{
            next(err)
        })
    })

// create a new admin
app.post("/Admin/create",(req,res,next)=>{
    // passed tests 
    db.User.create({
        email:req.body.email,
        f_name:req.body.f_name,
        l_name:req.body.l_name,
        password:req.body.password
    }).then((user)=>{
        res.status(201).json(user)
    }).catch((err)=>{
        next(err)
    })
})
// admin view his profile  
app.get('/Admin/profile',(req,res)=>{
    // passed tests 
    db.User.findAll({
        attributes:["email","f_name","l_name"],
        where:{
            id:2
        }
    }).then((admininfo)=>{
        res.status(206).json(admininfo)
    }).catch((err)=>{
        console.log(err.message);
        res.send(err)
    })
})

// admin edit account
app.patch('/Admin/account/:id',(req,res)=>{
    // passed tests 
    db.User.update({
        email:"rere@gmail.com",
        f_name:"rere",
        l_name:"mark",
        
    },  
    {
        where:{
            id:1
        }
    }).then((result)=>{
        res.status(205).json(result)
    }).catch((err)=>{
        console.log(err);
        res.send(err)
    })
});
 // delete account

 
 
 
}
module.exports=router;
