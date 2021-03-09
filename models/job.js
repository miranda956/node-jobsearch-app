module.exports=(sequelize,DataTypes)=>{
    const Jobs=sequelize.define("Jobs",{
        job_type:{
            type:DataTypes.STRING,
            allowNull:false

        },
         created_date:{
                type:DataTypes.STRING,
                allowNull:false

            },
            expires_on:{
                type:DataTypes.STRING,
                allowNull:false
                
            },
            is_active:{
                type:DataTypes.BOOLEAN,
                default:true

            },

            job_description:{
                type:DataTypes.TEXT,
                allowNull:false

            }, 
            job_location:{
                type:DataTypes.STRING,
                allowNull:false,

            },
            skills:{
                type:DataTypes.STRING,
                allowNull:false,

            },
            experience_level:{
                type:DataTypes.STRING,
                allowNull:false
            },

        
    },
    {
        freezeTableName:true,
        timestamps:false
    }
    
    );
    Jobs.associate=function(models){
        Jobs.belongsTo(models.Recruiter,{
            foreignkey:{
                allowNull:false
            }
        });
        Jobs.hasMany(models.Application,{
            foreignkey:{
                allowNull:false
            }
        })
        Jobs.hasMany(models.Applicant,{
            foreignkey:{
                allowNull:false
            }
        })
    }  
    return Jobs;

}