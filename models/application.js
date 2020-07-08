module.exports=(sequelize,DataTypes)=>{
    const Application=sequelize.define("Application",{
        job_name:{
            type:DataTypes.STRING,
            allownull:false,
            required:true,

        },
        applicant_email:{
            type:DataTypes.STRING,
            allownull:false,
            required:true,

        },
        recruter_email:{
            type:DataTypes.STRING,
            allownull:false,
            required:true
        },
        
    },{
    freezeTableName:true
    }
    );


    
    return Application;

}