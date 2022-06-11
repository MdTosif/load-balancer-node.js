const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(morgan('tiny'));
let port = 4001;
app.use((req,res)=>{
    console.log("user 1 is called");
    res.send("user 1 is called");
})
app.listen(port, ()=>{
    console.log("User 1 is listening to :", port);
})