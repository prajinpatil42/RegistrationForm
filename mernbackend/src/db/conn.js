const mongoose =require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Register").then(()=>{
    console.log(`Connection successfully`);
}).catch((e)=>{
    console.log(`No connection`);
})

