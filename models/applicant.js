// @ts-ignore
var bcrypt=require=('bcrypt');

module.exports=(sequelize,DataTypes)=>{
    const Applicant=sequelize.define("Applicant",{
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                isEmail:true
            }
        },
        first_name:{
            type:DataTypes.STRING,
            allowNull:false,
            

        },
        last_name:{
            type:DataTypes.STRING,
            allowNull:false,
            
        },
        contact:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                isNumeric:true
            }
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[8,15]
            }
        },
    },

    {
        timestamps:false,
        freezeTableName:true,
        
        instanceMethods: {
            generateHash(password) {
                // @ts-ignore
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            validPassword(password) {
                // @ts-ignore
                return bcrypt.compare(password, this.password);
            }
        }
    
    

});
    Applicant.associate=function(models){
        Applicant.hasMany(models.Application,{
            foreignkey:{
                allowNull:false
            }
        });  
        
    }
    return Applicant;
}