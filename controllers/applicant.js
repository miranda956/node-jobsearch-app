import db from "../models";
import passport from "passport";
function isloggedin(req,res,next){
    if(req.authenticated())
    return next();
    res.redirect('/applicant/login');
}
function isadmin(req,res,next){
    if(req.user.isadmin)
    return next();
    res.redirect('/admin/login');
}
 function  router (app){
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
    app.get("/api/get/Applicants",(req,res,next)=>{
        // passed tests 
        db.Applicant.findAll({
            attributes:[ "id","email","first_name","last_name","contact"]
        }).then((result)=>{
            res.json(result)
        }).catch(function(err){
            console.error(err.message);
            res.send(err);
            next(err);

        });
    });
    // get applicant by id and 

    app.get('/api/Applicant/profile/:id',(req,res,next)=>{
        // passed tests 
        db.Applicant.findAll({
            attributes:["email","first_name","last_name","contact"],
            where:{
                id:1
            }
        }).then((userprofile)=>{
            res.json(userprofile)
        }).catch((err)=>{
            console.error(err.message);
            res.send(err);
            next(err);
        });
    });
  

    // create a new applicant\

    app.post('/api/create/Applicant',(req,res)=>{
        db.Applicant.create({
            // passed tets
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            contact:req.body.contact,
            password:req.body.password
        }).then((applicant)=>{
            res.json(applicant)
        }).catch((err)=>{
            console.log(err.message);
            res.send(err)
        });
    });
    // edit applicant info
    app.patch('/api/patch/applicant/profile/:id',(req,res,next)=>{
        // passed tests 
        db.Applicant.update({
            first_name:"mark",
            last_name:"switger",
            email:"switiger@gmail.com",
            contact:"9789900"

        },{
            where:{
                id:4
            }
        }).then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err.message);
            res.send(err);
            next(err);
        });
    });


   //view jobs applied by applicant 
   app.get("/api/applicant/id/appliedjobs",(req,res,next)=>{
       // passed 
       db.Application.findAll({
           include:[db.Jobs],
           where:{
               ApplicantId:2
           },

       }).then((applications)=>{
           res.json(applications)
       }).catch((err)=>{
           next(err)
       })
   })

}
module.exports=router

