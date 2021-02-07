import db from "../models";
import passport from "passport";
function isloggedin(){
    // @ts-ignore
    if(req.authenticated())
    // @ts-ignore
    return next();
    // @ts-ignore
    res.redirect('/recruiter/login');
}
function isadmin (){
    // @ts-ignore
    if(req.user.isadmin)
    // @ts-ignore
    return next()
    // @ts-ignore
    res.redirect('/admin/login')
}
 function  router (app){
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
    app.post('/api/post/Recruiter',(req,res,next)=>{
        // passed tests 
        db.Recruiter.create({
            company_name:req.body.company_name,
            company_email:req.body.company_email,
            establishment_date:req.body.establishment_date,
            Bussiness_stream:req.body. Bussiness_stream,
            company_url:req.body.company_url,
            company_location: req.body.company_location,
            password:req.body.password
        }).then((Recruiter)=>{
            res.status(201).json(Recruiter);
        }).catch((err)=>{
            console.error(err.message);
            res.send(err);
            next(err);
        })
    })
    // view all recruiter-admin
    app.get('/api/get/Recruiters',(req,res)=>{
        // passed tests 
        db.Recruiter.findAll({
            attributes:["company_name","company_email","establishment_date","Bussiness_stream","company_url","company_location"]
        }).then((recruiters)=>{
            res.json(recruiters)
        }).catch((err)=>{
            console.log(err.message);
            res.send(err);
        });
    });
    // recruiter --profile 
    app.get('/api/Recruiter/profile/:id',(req,res,next)=>{
        // passed tests 
        db.Recruiter.findAll({
            where:{
                id:1
            }
        }).then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err.message);
            next(err);
            res.send(err);
        })
    })
      
    // edit recruiter account
    app.patch('/api/Recruiter/profile/update/:id',(req,res,next)=>{
        // passed tests 
        db.Recruiter.update({
            company_email:"kcb@gmail.com",
            company_location:"kakamega",
            company_url:"kcb.co.ke",
            company_name:"kcb",
        

        },{
            where:{
                id:2
            }
        }).then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.error(err.message);
            res.send(err);
            next(err);
        })
    }) 

    // delete account of recruiter 
    app.delete('/api/delete/recruiter/:id',(req,res,next)=>{
        // passed tets 
        db.Recruiter.destroy({
      where:{
          id:2
      }      
        }).then((result)=>{
            res.json(result);

        }).catch((err)=>{
            console.log(err.message);
            next(err);
            res.send(err);
        })
    });
    // return recruiter posted jobs with applicants 
    app.get("/api/Recruiter/applicants/:id",(req,res,next)=>{
        // passed 
        db.Application.findAll({
            include:[db.Recruiter],
            where:{
                RecruiterId:1
            },
            
        }).then((data)=>{
            res.json(data)

        }).catch((err)=>{
            next(err)
        })
    })
    
    
    
    app.get("/api/Recruiter/applicants",(req,res,next)=>{
        // passed 
        db.Application.findAll({
            include:[db.Recruiter],
    
        }).then((data)=>{
            res.json(data)

        }).catch((err)=>{
            next(err)
        })
    })

}
module.exports=router;  
