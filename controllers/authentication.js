import db from "../models";
import passport from "passport";

const router=(app) =>{

app.patch('/api/update/password/:id',(req,res,next)=>{
db.Applicant.update({
    pwd:req.body.pwd,
    where:{
        email:req.user.email
    }
})


})



}

module.exports=router;