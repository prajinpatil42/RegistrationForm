const mongoose=require("mongoose");

const employeeSchema =new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true,
    },
    psw:{
        type:String,
        required:true
    },
    pswrepeat:{
        type:String,
        required:true
    }

})


const Register =new mongoose.model("Registerform",employeeSchema);

module.exports=Register;

















