const express=require('express');
const bodyparser=require('body-parser');
const methodoverride=require('method-override');
const logger=require('morgan');
const cookieparser=require('cookie-parser');
const session=require('express-session');
const path =require('path');
const exphbs=require('express-handlebars');
const PORT=process.env.PORT||5000;
const passport =require('./config/passport');

const db=require('./models');
require('./controllers/admin'); 
require('./controllers/applicant');
require('./controllers/Applications');
require('./controllers/jobs');
require('./controllers/recruiter');

// intializing an instance of express
const app= express();
app.use(cookieparser());
app.use(methodoverride("_method"));
app.use(logger("dev"));
app.use(session({
    secret:'123456',
    resave:"true",
    saveUninitialized:"true"
}));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(passport.initialize());
app.use(passport.session());
app.engine('handlebars', exphbs()); 
app.set('view engine', 'handlebars');
 
app.use(express.static(path.join(__dirname,'views')));

db.sequelize.sync({force:false}).then(()=>{
    app.listen(PORT,function(err){
        if(!err){
            console.log(`application listening on port ${PORT}`);
        } else if(err){
            console.log(JSON.stringify(err))
        }
    }
    ) 

});


