var db =require('../models');
var passport =require('passport');
function isloggedin(){
    if(req.authenticated())
    return next();
    res.redirect('/applicant/login');
}
function isadmin(){
    if(req.user.isadmin)
    return next();
    res.redirect('/admin/login');
}
 module.exports=function (app){
    app.get('/applicant',(req,res)=>{
        res.redirect('/applicant/login')
    })
    app.get('/applicant/login',(req,res)=>{
        res.render('/applicant/login')
    });
    app.post('/applicant/login',passport.authenticate('local-signup',{
        successRedirect:'/jobs',
        failureRedirect:'applicant/login'
    }));
    //-- logout --function
    app.get('/applicant/logout',isloggedin,(req,res,next)=>{
        req.session.destroy((err)=>{
            next(err);
            res.redirect('/applicant/login')

        });

    })

    // get all aplicants -admin
    app.get("/Applicants",isadmin,(req,res,next)=>{
        db.Applicant.findAll({}).then((result)=>{
            res.render('Applicant',{Applicant:result});
        }).catch(function(err){
            console.err(err.message);
            res.send(err);
            next(err);

        });
    });
    // get applicant by id and 

    app.get('Applicant/:id/',isloggedin,(req,res,next)=>{
        db.Applicant.findOne({
            where:{
                id:req.params.id
            }
        }).then((userprofile)=>{
            res.render('userupdate',{userupdate:userprofile})
        }).catch((err)=>{
            console.err(err.message);
            res.send(err);
            next(err);
        });
    });


    // create a new applicant\

    app.post('/Applicant',(req,res)=>{
        db.Applicant.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            contact:req.body.contact,
            password:req.body.password
        }).then(()=>{
            res.redirect('/Jobs')
        }).catch((err)=>{
            console.log(err.message);
            res.send(err)
        });
    });
    // edit applicant info
    app.put('/Applicant/:id',isloggedin,(req,res,next)=>{
        db.Applicant.update({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            contact:req.body.contact

        },{
            where:{
                id:req.user.id
            }
        }).then((result)=>{
            res.redirect('/Applicant');
        }).catch((err)=>{
            console.log(err.message);
            res.send(err);
            next(err);
        });
    });

    // delete user account
   app.delete('/applicant/delete/:id',isloggedin,(req,res,next)=>{
       db.Applicant.destroy({
           where:{
               id:req.user.id
           }

       }).then((result)=>{
           res.redirect('/');
       }).catch((err)=>{
           console.err(err.message);
           res.send(err);
           next(err);
       });
   });
   // view applied jobs
   app.get('/applicant/job/:id',isloggedin,(req,res,next)=>{
       db.Applications.findAll({
           attributes:['job_name','recruiter_email'],
           where:{
               applicantID:req.user.id
           }
       }).then((result)=>{
           res.render('application',{application:result})
       }).catch((err)=>{
           console.err(err);
           res.send(err);
           next(err);
       })
   })


}

