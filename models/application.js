module.exports=(sequelize,DataTypes)=>{
    const Application=sequelize.define("Application",{
        job_name:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true,

        },
        applicant_email:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true,

        },
        applied_on:{
            type:DataTypes.DATE,
            allowNull:false
        },
        recruter_email:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        
    },{
    freezeTableName:true,
    timestamps:false
    } 
    );
    Application.associate=(models)=>{
        Application.belongsTo(models.Jobs,{
            foreignkey:{
                allowNull:false
            }
        })
        Application.belongsTo(models.Recruiter,{
            foreignkey:{
                allowNull:false 
            }
        })
        Application.belongsTo(models.Applicant,{
            foreignkey:{
                allowNull:false
            }
        })
    }


    
    return Application;

}