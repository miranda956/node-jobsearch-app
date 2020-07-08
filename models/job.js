module.exports=(sequelize,DataTypes)=>{
    const Jobs=sequelize.define("Jobs",{
        job_type:{
            type:DataTypes.STRING,
            allownull:false

        },
         created_date:{
                type:DataTypes.DATE,
                allownull:false

            },
            is_active:{
                type:DataTypes.BOOLEAN,

            },

            job_description:{
                type:DataTypes.TEXT,
                allownull:false

            }, 
            job_location:{
                type:DataTypes.STRING,
                allownull:false,

            },
            skills:{
                type:DataTypes.STRING,
                allownull:false,

            },
            experience_level:{
                type:DataTypes.STRING,
                allownull:false
            },

        
    },
    {
        freezeTableName:true
    }
    
    );
    Jobs.associate=function(models){
        Jobs.belongsTo(models.Recruiter,{
            foreignkey:{
                allownull:false
            }
        });
        Jobs.hasMany(models.Application,{
            foreignkey:{
                allownull:false
            }
        })
    }
    return Jobs;

}