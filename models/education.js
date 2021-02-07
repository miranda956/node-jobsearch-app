module.exports=(sequelize,DataTypes)=>{
    const Education=sequelize.define("Education",{
        
            certificate_name:{
                type:DataTypes.STRING,
                allowNull:false
            },
            major:{
                type:DataTypes.STRING,
                allowNull:false
            },
            insitution_attended:{
                type:DataTypes.STRING,
                allowNull:false
            },
            start_date:{
                type:DataTypes.DATE,
                allowNull:false
            
            },
            completion_date:{
                type:DataTypes.DATE,
                allowNull:false
            },
            
     },
     {
         freezeTableName:true,
         timestamps:false
     }
     );
    Education.associate=function(models){
        Education.belongsTo(models.Applicant,{
            foreignkey:{
                allowNull:false
            }
        })

    }
    return Education;
}