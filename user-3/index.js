const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let port = 4003;
// app.use(morgan('tiny'));
app.use((req,res)=>{
    console.log("user 3 is called");
    res.send("user 3 is called");
})
app.listen(port, ()=>{
    console.log("user 3 is listening to :", port);
})