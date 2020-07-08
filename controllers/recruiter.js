var db =require('../models');
var passport=require('passport');
function isloggedin(){
    if(req.authenticated())
    return next();
    res.redirect('/recruiter/login');
}
function isadmin (){
    if(req.user.isadmin)
    return next()
    res.redirect('/admin/login')
}
 module.exports=function (app){
    app.get('/recruiter',(req,res)=>{
        res.redirect('/recruiter/login')
    });

app.get('/recruiter/login',(req,res)=>{
    res.render('recruiter/login')
});
app.post('/recruiter/login',passport.authenticate('local-signup',{
    successRedirect:"recruiter",
    failureRedirect:'recruiter/login'
    
}))
// logout --function
app.get('recruiter/logout',isloggedin,(req,res,next)=>{
    req.session.destroy((err)=>{
        next(err);
        res.redirect('/recruiter/login')

    })
})

    // create a new reacruiter account
    app.post('/Recruiter',(req,res,next)=>{
        db.Recruiter.create({
            company_name:req.body.company_name,
            company_email:req.body.company_email,
            establishement_date:req.body.establishement_date,
            bussiness_stream:req.body.bussiness_stream,
            company_url:req.body.company_url,
            company_location:req.body.company_location,
            password:req.body.password
        }).then((Recruiter)=>{
            res.render('Recruiter',{Recruiter:Recruiter})
        }).catch((err)=>{
            console.error(err.message);
            res.send(err);
            next(err);
        })
    })
    // view all recruiter-admin
    app.get('Recruiters',isadmin,(req,res)=>{
        db.Recruiter.findAll({}).then(()=>{
            res.render('Recruiters',{user:req.user})
        }).catch((err)=>{
            console.log(err.message);
            res.send(err);
        });
    });
    // view specific account
    app.get('/Recruiter/profile/:id',isloggedin,(req,res,next)=>{
        db.Recruiter.findOne({
            where:{
                id:req.user.id
            }
        }).then((result)=>{
            res.render('Recruiter-profile',{result,user:req.user})
        }).catch((err)=>{
            console.log(err.message);
            next(err);
            res.send(err);
        })
    })
      
    // edit recruiter account
    app.post('Recruiter/update/:id',isloggedin,(req,res,next)=>{
        db.Recruiter.update({
            company_email:req.body.company_email,
            company_location:req.body.company_location,
            company_url:req.body.company_url,
            company_name:req.body.company_name,
            where:{
                id:req.user.id
            }

        }).then((result)=>{
            res.redirect('/Recruiter')
        }).catch((err)=>{
            console.error(err.message);
            res.send(err);
            next(err);
        })
    }) 

    // delete account of recruiter 
    app.delete('/Recruiter/delete/:id',isloggedin,(req,res,next)=>{
        db.Recruiter.destroy({
      where:{
          id:req.user.id
      }      
        }).then((result)=>{
            res.redirect('/');

        }).catch((err)=>{
            console.log(err.message);
            next(err);
            res.send(err);
        })
    });
    // return recruiter posted jobs with applicants 
    app.get('/recruiter/applications',isloggedin,(req,res,next)=>{
        db.Applications.findAll({
            attributes:['job_name','applicant_email'],
            where:{
                recruiterId:req.user.id
            }
        }).then((result)=>{
            res.render('applications',{Applications:result})
        }).catch((err)=>{
            console.err(err);
            res.send(err);
            next(err);
        })
    })
    

}

