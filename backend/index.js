const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const FormDataModel = require("./models/FormData");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://rahulmhto:rahulmhto@cluster0.hjbww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);


app.post('/register', (req, res)=>{
    // To post / insert data into database

    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(stu_reg => res.json(stu_reg))
            .catch(err => res.json(err))
        }
    })
    
})

app.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})

app.listen(3001, (req, res) =>{
    console.log("Server listen on http://127.0.0.1:3001");
})