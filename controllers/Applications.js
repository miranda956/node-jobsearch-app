 import db from "../models"
 import moment from "moment";
 // @ts-ignore
 function isadmin(req,next,res){
     if(req.user.isadmin)
     return next();
     res.redirect('/admin/login');
 }
 function isloggedin(){
    // @ts-ignore
    if(req.authenticated())
    // @ts-ignore
    return next();
    // @ts-ignore
    res.redirect('/applicant/login');
}
function router (app){

     // get all applications -admin
     // @ts-ignore
     app.get("/api/get/applications",(req,res,next)=>{
         //passed
         db.Application.findAll({})
         .then((application)=>{
             res.json(application)
         }).catch((err)=>{
             next(err)
         })
     })
     // get applications from jobs posted by a specific recruiter

     // delete application - admin 

     // apply --for job feature 
     // @ts-ignore
     app.get('/api/applicant/apply',isloggedin,(req,res,next)=>{
         // conflicting 
         const date=moment();
         db.Jobs.findAll({
             attributes:['id','job_type','created_date','isactive','job_description','skills','experience_level'],
             where:{
                 id:req.params.id
             }
         }).then((data1)=>{
             db.Applications.update({
                 ApplicantId:data1.req.user.id,
                 jobId:data1.dataValues.id,
                 applied_on:date,
                 job_name:data1.dataValues.job_type
             // @ts-ignore
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

 
 // @ts-ignore
 let  check_date=async(req,res)=>{
    // to tetsed 
const posted_on=await db.Jobs.findAll({
    attributes:["created_on"],
    where:{
        id:req.params.id
    }
});
const expires_on= await db.Jobs.findAll({
    attributes:["expires_on"],
    where:{
        id:req.params.id
    }
})
let initial_date=moment(posted_on);
let end_date=moment(expires_on);
let date=moment();
if(date.isBetween(initial_date,end_date)){
    db.Jobs.update({
        isactive:true
    })

} else {
    db.Jobs.update({
        isactive:false
    })
}
     }
      
     

     
}
module.exports=router;