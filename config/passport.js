const localstrategy= require("passport-local").Strategy;
const db =require('../models');
const passport =require('passport');

    var Applicant=db.Applicant;
    var Recruiter=db.Recruiter;
    var User=db.User;
    passport.serializeUser(function(user, done) {
      return done(null, { id: user.id, isRecruiter: user.isRecruiter,isApplicant:User.isApplicant,isAdmin:user.isAdmin });
    });
    passport.deserializeUser(function(id, done) {
      if (id.isApplicant) {
        Applicant.findById(id.id).then(function(user) {
          if (user) {
            done(null, user.get());
          }
        }).catch(function (err) {
          console.log(err);
        });
      }
      else if (id.isAdmin) {
        User.findById(id.id).then(function(user) {
          if (user) {
            done(null, user.get());
          }
        }).catch(function (err) {
          console.log(err);
        });
      } else (id.isRecruiter) 
        Recruiter.findById(id.id).then(function(user){
          if(user){
            done(null,user.get());
          }
        }).catch(function(err){
          console.error(err);
          
        })
      
    });
  // Applicant signup
      passport.use('local-signup',new localstrategy({
          usernameField:'email',
          passwordField:'pwd',
          passReqToCallback:true

      },function(email, pwd, done ){
        db.Applicant.findOne({
          where:{
            email:email
          }
        }).then((dbApplicant)=>{
          if(!dbApplicant){
            return done(null,false,{
              message:'invalid email'
            })
          }
          else if(!dbApplicant.validpassword(pwd)){
            return done(null,false,{
              message:'invalid password'
            })
          }
          return done(null,dbApplicant)
        })

      }))
      //--recruiter signin
      passport.use('local-signup',new localstrategy({
        usernameField:'email',
        passwordField:'pwd',
        passReqToCallback:true
      },(email,pwd,done)=>{
        db.Recruiter.findOne({
          where:{
            email:email
          }
        }).then((dbRecruiter)=>{
          if(!dbRecruiter){
            return done(null,false,{
              message:'invalid email'
            })
          }
          else if(!dbRecruiter.validpassword(pwd)){

            return done(null,false,{
              message:'invalid password'
            })
          }
          return done(null,dbRecruiter)
        })
      }))
      // admin --signin
      passport.use('local-signup',new localstrategy({
        usernameField:'email',
        passwordField:'pwd',
        passReqToCallback:true
      },(email,pwd,done)=>{
        db.Admin.findOne({
          where:{
            email:email
          }
        }).then((dbAdmin)=>{
          if(!dbAdmin){
            return done(null,false,{
              message:'invalid email'
            })
          }
          else if(!dbAdmin.validpassword(pwd)){
            return done(null,false,{
              message:'invalid password'
            })
          }
          return done(null,dbAdmin)
        })
      }));
      module.exports=passport;

