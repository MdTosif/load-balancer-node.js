const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let port = 5003;
app.listen(port, ()=>{
    console.log("wallet 3 is listening to :", port);
})