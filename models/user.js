var bcrypt=require('bcrypt'); 
module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define("User",{
        email:{
            type:DataTypes.STRING,
            allownull:false,
            required:true
        },
        password:{
            type:DataTypes.STRING,
            allownull:false,
            required:true
        
        },
    },{
    instanceMethods:{
        generateHash(password){
            return bcrypt.hash(password,bcrypt.gensaltSync(8))
        },
        validpassword(password){
            return bcrypt.compare(password,this.password)

        }
    }
},{
freezeTableName:true
}
);
    
    
    return User;
}