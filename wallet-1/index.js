const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let port = 5001;
app.listen(port, ()=>{
    console.log("wallet 1 is listening to :", port);
})