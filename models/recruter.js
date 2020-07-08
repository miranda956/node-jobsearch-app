var bcrypt=require('bcrypt');
module.exports=(sequelize,DataTypes)=>{
    const Recruiter=sequelize.define("Recruiter",{

        company_name:{
            type:DataTypes.STRING,
            allownull:false
        },
        company_email:{
            type:DataTypes.STRING,
            allownull:false,
            validate:{
                isEmail:true
            }
        },
        establishment_date:{
            type:DataTypes.DATE,
            allownull:false
        },
        Bussness_stream:{
            type:DataTypes.STRING,
            allownull:false
        },
        company_url:{
            type:DataTypes.STRING,
            allownull:false
        },
        company_location:{
            type:DataTypes.STRING,
            allownull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validations:{
                len:[8]
            }
        },
        
 
    }, {
    instanceMethods:{
        generateHash(password){
            return bcrypt.hash(password,bcrypt.genSaltSync(8))
        },
        validpassword(password){
            return bcrypt.compare(password,this.password)
        }
    },
},{
    freezeTableName:true

}

);
    return Recruiter;
}