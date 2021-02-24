var bcrypt=require('bcrypt');

module.exports=(sequelize,DataTypes)=>{
    const Recruiter=sequelize.define("Recruiter",{

        company_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        company_email:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                isEmail:true
            }
        },
        Bussiness_stream:{
            type:DataTypes.STRING,
            allowNull:false
        },
        company_url:{
            type:DataTypes.STRING,
            allowNull:false
        },  
        company_location:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validations:{
                len:[8,30] 
            }
        },
        
    }, 
    {
timestamps:false,
freezeTableName:true,
instanceMethods: {
    generateHash(password) {
        return bcrypt.hash(password, bcrypt.genSaltSync(8));
    },
    validPassword(password) {
        return bcrypt.compare(password, this.password);
    }
}

  
}
);
Recruiter.associate=(models)=>{
    Recruiter.hasMany(models.Jobs,{
        foreignkey:{
            allowNull:false 
        }
    })
    
}
    return Recruiter;
}