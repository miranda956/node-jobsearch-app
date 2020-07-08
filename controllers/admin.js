var db =require('../models');
var passport=require('passport');
function isadmin(){
    if(req.user.isadmin)
      return next();
    
    res.redirect('/admin/login')
}
module.exports=function (app){
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

// create a new admin
app.post('/Admin',(req,res)=>{
    db.User.create({
        email:req.body.email,
        password:req.boddy.password
    }).then(()=>{
        res.redirect('/Admin')
    }).catch((err)=>{
        console.log(err);
        res.send(err)
    })
});
// admin view his profile  
app.get('Admin',isadmin,(req,res)=>{
    db.User.findOne({
        where:{
            id:req.user.id
        }
    }).then((admininfo)=>{
        res.render('admin-profile',{admininfo,user:req.user})
    }).catch((err)=>{
        console.log(err.message);
        res.send(err)
    })
})

// admin edit account
app.put('/Admin/account/:id',isadmin,(req,res)=>{
    db.User.update({
        email:req.body.email,
        password:req.body.password,
        where:{
            id:req.user.id
        }
    }).then((result)=>{
        res.redirect('/Admin')
    }).catch((err)=>{
        console.log(err);
        res.send(err)
    })
});
 // delete account

 app.delete('/Admin/delete/:id',isadmin,(req,res)=>{
     db.User.destroy({
         where:{
             id:req.user.id
         }
     }).then((result)=>{
         res.redirect('/');
     }).catch((err)=>{
         console.log(err.message);
         res.send(err);
     })
 })
 

}
