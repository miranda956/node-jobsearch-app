import db from "../models";
function isloggedin(req,res,next){
    if(req.authenticated())
    return next();
    res.redirect('/applicant/login')
}
function isadmin(req,res,next){
    if(req.user.isadmin)
    return next();
    res.redirect('/admin/login');

}
function isrecruiter(req,res,next){
    if(req.authenticated())
    return next();
    res.redirect('/recruiter/login')
}
function  router (app){

    app.get('/jobs',(req,res,next)=>{
        // passed test 
        db.Jobs.findAll({
            where:{
                is_active:true    
            }
        }).then((jobs)=>{
            res.json(jobs)
        }).catch((err)=>{
            console.log(err.message);
            next(err);
            res.send(err);

        });
    });
    // getting jobs to home page 
    app.get('/api/jobs/details',(req,res,next)=>{
        // passsed tests 
        db.Jobs.findAll({
            include:[db.Recruiter]
        }).then((jobs)=>{
            res.json(jobs)
        }).catch((err)=>{
            console.error(err);
            next(err);
        })
    })
    
    
    
    app.post("/api/job/create",(req,res,next)=>{
        db.Jobs.create({
            job_type:req.body.job_type,
            created_date:Date,
            job_description:req.body.job_description,
            job_location:req.body.job_location,
            skills:req.body.skills,
            experience_level:req.body.experience_level,
            RecruiterId:req.user.id
        }).then((newJob)=>{
            res.json(newJob)
        }).catch((err)=>{
            console.error(err)
        })
    })


    app.post('/api/post/job',(req,res,next)=>{
        db.Jobs.create({
            job_type:"accountant",
            created_date:"2020-09-09",
            expires_on:"2020-09-09",
            job_description:"accounts manager",
            job_location:"khwisero",
            skills:"bachelor degree,accountant",
            experience_level:"3 years",
            
        }).then((data)=>{
            res.json(data)

        }).catch((err)=>{
            next(err)
        })
    })
    // update job  - recruiter
    app.patch('/job/update/:id',(req,res,next)=>{
        // passed tests 
        db.Jobs.update({
            job_type:"enginering",
            end_date:"2020-09-12",
            job_description:"senior software enginerr",
            skills:"SQL,NET core,Js,design patterns",
            experience_level:"5+ years "
        },{
            where:{
                id:2
            }
        }).then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err.message);
            res.send(err);
            next(err);
        });
    });
    

// delete existing job -admin
    app.delete('/job/delete/:id',(req,res,next)=>{
        // passed tests 
        db.Jobs.destroy({
            where:{
                id:1
            }
        }).then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.error(err.message);
            res.send(err);
            next(err);
        })
    });

    // delete a job posted by recruiter

    // --search for specific job
    app.get('/api/tutorials?search=[keyword]',(req,res,next)=>{
        // ok 
        db.Jobs.findAll({
            where:{
                $or:{
                    job_type:{
                        $like:"%"+req.params.keyword+"%"
                    },
                    created_date:{
                        $like:"%"+req.params.keyword+"%"
                    },
                    job_description:{
                        $like:"%"+req.params.keyword+"%"
                    },
                    job_location:{
                        $like:"%"+req.params.keyword+"%"
                    },
                    skills:{
                        $like:"%"+req.params.keyword+"%"
                    },
                    experience_level:{
                        $like:"%"+req.params.keyword+"%"
                    }
                }
            }
        }).then((result)=>{
            res.render('searchs',{searchs:result})
        }).catch((err)=>{
            console.error(err);
            next(err)
        })
    })
    //-- return a specific job 
    app.get('/job/:id',(req,res,next)=>{
        // passed test 
        db.Jobs.findAll({
            where:{
                id:2
            }
        }).then((result)=>{
            res.json(result)

        }).catch((err)=>{
            console.error(err);
            next(err)
        })
    })


}
module.exports=router;
