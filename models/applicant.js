var bcrypt=require=('bcrypt');

module.exports=(sequelize,DataTypes)=>{
    const Applicant=sequelize.define("Applicant",{
        email:{
            type:DataTypes.STRING,
            allownull:false,
            validate:{
                isEmail:true
            }
        },
        first_name:{
            type:DataTypes.STRING,
            allownull:false,
            validate:[5,15]

        },
        last_name:{
            type:DataTypes.STRING,
            allownull:false,
            validate:[5,15]
        },
        contact:{
            type:DataTypes.INTEGER,
            allownull:false,
            validate:{
                isNumeric:true
            }
        },
        password:{
            type:DataTypes.STRING,
            allownull:false,
            validate:{
                len:[8,15]
            }
        },
    },
    {

    instanceMethods: {
        validPassword: function(password) {
            return bcrypt.compareSync(password, this.password);
        }
    },
    hooks: {
        beforeCreate: function(Applicant, options, cb) {
            Applicant.password = bcrypt.hashSync(
                Applicant.password,
                bcrypt.genSaltSync(10),
                null
            );
            cb(null, options);
        }
    },
   
},
{
    freezeTableName:true

}
);
    Applicant.associate=function(models){
        Applicant.hasMany(models.Application,{
            foreignkey:{
                allownull:false
            }
        });
    }
    return Applicant;
}