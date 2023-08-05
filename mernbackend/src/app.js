const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");

const Register=require("./models/registers");


const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
//console.log(path.join(__dirname,"../public"));

app.use(express.json());
//POSTMAN KELIYE PERFECT
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/register", (req, res) => {
  res.render("register");
});

//create a new user in our database

app.post("/register", async(req, res) => {
    try{
       const password=req.body.psw;
       const cpassword=req.body.pswrepeat;
       if(password===cpassword){
        const registerEmployee = new Register({
          firstname: req.body.firstname,
          lastname:req.body.lastname,
          gender:req.body.gender,
          email:req.body.email,
          psw:password,
          pswrepeat:cpassword
        })
        const registered=await registerEmployee.save();

        res.status(201).render("index");
       }else{
        res.send("password is not matching")
       }

    }catch(error){
        res.status(400).send(error);
    }
  });

app.get("/login", (req, res) => {
    res.render("register");
  });

app.get("/", (req, res) => {
    res.render("index");
  });

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
