const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let port = 5002;
app.listen(port, ()=>{
    console.log("wallet 2 is listening to :", port);
})