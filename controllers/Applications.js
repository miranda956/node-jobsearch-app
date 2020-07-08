 var db= require('../models');
 function isadmin(){
     if(req.user.isadmin)
     return next();
     res.redirect('/admin/login');
 }
 function isloggedin(){
    if(req.authenticated())
    return next();
    res.redirect('/applicant/login');
}
module.exports=function  (app){

     // get all applications -admin
     app.get('/Applications',isadmin,(req,res,next)=>{
         db.Application.findAll({}).then((result)=>{
             res.render('Applications',{
                 Applications:result
             })

         }).catch((err)=>{
             console.err(err.message);
             res.send(err);
             next(err);
         });
     });
     // get applications from jobs posted by a specific recruiter

     // delete application - admin 
     app.delete("Application/:id/",isadmin,(req,res,next)=>{
         db.Applications.destroy({
             where:{
                 id:req.params.id
             }
         }).then((result)=>{
             res.redirect('/Applications');
         }).catch((err)=>{
             console.log(err.message);
             res.send(err);
             next(err);
         })
     });
     // apply --for job
     app.get('/applicant/apply',isloggedin,(req,res,next)=>{
         db.Jobs.findAll({
             attributes:['id','job_type','created_date','isactive','job_description','skills','experience_level'],
             where:{
                 id:req.params.id
             }
         }).then((data1)=>{
             db.Applications.update({
                 Applicantid:data1.req.user.id,
                 jobId:data1.dataValues.id,
                 job_name:data1.dataValues.job_type
             }).then((dbApplicant)=>{
                 db.Applicant.findAll({
                     attributes:['email'],
                     where:{
                         id:req.user.id
                     }
                 }).then((data)=>{
                     db.Applications.update({
                         applicant_email:data.dataValues.email
                     })
                 }).catch((err)=>{
                     console.error(err);
                     next(err);
                 })
             }).catch((err)=>{
                 console.error(err);
                 next(err);
             })
         }).catch((err)=>{
             console.error(err);
             next(err);
         })
     })
     
}
