module.exports=(sequelize,DataTypes)=>{
    const Experience=sequelize.define('Experience',{
        current_job:{
            type:DataTypes.STRING,
            allownull:false
        },
        job_title:{
            type:DataTypes.STRING,
            allownull:false

        },
        start_date:{
            type:DataTypes.DATE,
            allownull:false

        },
        company_name:{
            type:DataTypes.STRING,
            allownull:false,

        },
        years_work:{
            type:DataTypes.INTEGER,
            allownull:false,
            validate:{
                isNumeric:true
            },
            current_salary:{
                type:DataTypes.DECIMAL,
                allownull:false,
                validate:{
                    isNumeric:true
                }
            }
        },
        
        
        
    },
    {
        freezeTableName:true

    }
    );
    Experience.associate=function(models){
        Experience.belongsTo(models.Applicant,{
            foreignkey:{
                allownull:false
            }
        });
    }
    return Experience;
}