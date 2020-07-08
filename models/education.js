module.exports=(sequelize,DataTypes)=>{
    const Education=sequelize.define("Education",{
        email:{
            type:DataTypes.STRING,
            allownull:false,
            valiadation:{
                isEmail:true
            }
        },
            certificate_name:{
                type:DataTypes.STRING,
                allownull:false
            },
            major:{
                type:DataTypes.STRING,
                allownull:false
            },
            insitution_attended:{
                type:DataTypes.STRING,
                allownull:false
            },
            start_date:{
                type:DataTypes.DATE,
                allownull:false
            
            },
            completion_date:{
                type:DataTypes.DATE,
                allownull:false
            },
            cpga:{
                type:DataTypes.INTEGER,
                allownull:false,
                validate:{
                    isNumeric:true
                }

            },
     },
     {
         freezeTableName:true
     }
     );
    Education.associate=function(models){
        Education.belongsTo(models.Applicant,{
            foreignkey:{
                allownull:false
            }
        })

    }
    return Education;
}