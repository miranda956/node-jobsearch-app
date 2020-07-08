var db=require('../models');
function isloggedin(){
    if(req.authenticated())
    return next();
    res.redirect('/applicant/login')
}
function isadmin(){
    if(req.user.isadmin)
    return next();
    res.redirect('/admin/login');

}
function isrecruiter(){
    if(req.authenticated())
    return next();
    res.redirect('/recruiter/login')
}
module.exports=function (app){
    // get all jobs-- admin
    app.get('/Jobs',isadmin,(req,res,next)=>{
        db.Jobs.findAll({}).then((result)=>{
            res.render('Jobs',{jobs:result})
        }).catch((err)=>{
            console.log(err.message);
            next(err);
            res.send(err);

        });
    });
    // getting jobs to home page 
    app.get('/jobs',(req,res,next)=>{
        Jobs.findAll({
            include:[{
                model:Recruiter,
                required:true
            }]
        }).then((jobs)=>{
            res.render('jobs',{jobs:jobs})
        }).catch((err)=>{
            console.error(err);
            next(err);
        })
    })
    

    app.post('/Jobs/post',isrecruiter,(req,res,next)=>{
        db.Jobs.create({
            job_type:req.body.job_type,
            created_date:req.body.created_date,
            job_description:req.body.job_description,
            job_location:req.body.job_location,
            skills:req.body.skills,
            experience_level:req.body.experience_level,
            RecruiterId:req.user.id
        }).then((data)=>{
            db.Recruiter.findAll({
                attributes:['company_email'],
                where:{
                    id:req.user.id
                }
            }).then((data1)=>{
                db.Applications.update({
                    jobId:data.dataValues.id,
                    job_name:data.dataValues.job_type,
                   recruiter_email:data1.dataValues.company_email 
                })
            }).catch((err)=>{
                console.error(err);
                next(err);
            })
            res.redirect('/Jobs')
        }).catch((err)=>{
            console.err(err.message);
            res.send(err);
            next(err);
        })
    });

    // update job  - recruiter
    app.put('/job/update/:id',isrecruiter,(req,res,next)=>{
        db.Jobs.update({
            job_type:req.body.job_type,
            end_date:req.body.end_date,
            job_description:req.body.job_description,
            skills:req.body.skills,
            experience_level:req.body.experience_level
        },{
            where:{
                id:req.params.id
            }
        }).then((result)=>{
            res.redirect('/jobs');
        }).catch((err)=>{
            console.err(err.message);
            res.send(err);
            next(err);
        });
    });
    

// delete existing job -admin
    app.delete('/jobs/:id',isadmin,(req,res,next)=>{
        db.Jobs.destroy({
            where:{
                id:req.params.id
            }
        }).then((result)=>{
            res.redirect('/jobs');
        }).catch((err)=>{
            console.err(err.message);
            res.send(err);
            next(err);
        })
    });

    // delete a job posted by recruiter

    // --search for specific job
    app.get('/job/search/keyword',isloggedin,(req,res,next)=>{
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
    app.get('/job/:id',isloggedin,(req,res,next)=>{
        db.Jobs.findOne({
            where:{
                id:req.params.id
            }
        }).then((result)=>{
            res.render('job',{job:result})

        }).catch((err)=>{
            console.error(err);
            next(err)
        })
    })


}
