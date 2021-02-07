var bcrypt=require("bcrypt"); 
module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define("User",{


        email:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        f_name:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        l_name:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
          
        },  
    },{
        timestamps:false,
        freezeTableName:true,
        instanceMethods: {
            generateHash(password) {
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            validPassword(password) {
                return bcrypt.compare(password, this.password);
            }
        }
        
    
});

    
    return User;
}