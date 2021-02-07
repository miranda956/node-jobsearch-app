module.exports=(sequelize,DataTypes)=>{
    const Experience=sequelize.define('Experience',{
        current_job:{
            type:DataTypes.STRING,
            allowNull:false
        },
        job_title:{
            type:DataTypes.STRING,
            allownull:false

        },
        start_date:{
            type:DataTypes.DATE,
            allowNull:false

        },
        company_name:{
            type:DataTypes.STRING,
            allowNull:false,

        },
        years_ofwork:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                isNumeric:true
            },
        },
     current_salary:{
         type:DataTypes.DECIMAL,
                allowNull:false,
                
            }, 
        
        
        
        
    },
    {
        freezeTableName:true,
        timestamps:false

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