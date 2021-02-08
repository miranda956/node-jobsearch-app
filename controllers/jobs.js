import bodyParser from "body-parser";
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
    
    
    app.post('/api/post/job',(req,res,next)=>{
        db.Jobs.create({
            job_type:req.body.job_type,
            created_date:req.body.created_date,
            expires_on:req.body.expires_on,
            job_description:req.body.job_description,
            job_location:req.body.job_location,
            skills:req.body.skills,
            experience_level:req.body.experience_level
            
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
            job_type:req.body.job_type,
            end_date:req.body.end_date,
            job_description:req.body.job_description,
            skills:req.body.skills,
            experience_level:req.body.experience_level
        },{
            where:{
                id:req.param.id
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
                id:req.param.id
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
                id:req.param.id
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
