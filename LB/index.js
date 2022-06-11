const { default: axios } = require("axios");
const express = require("express");
const serverPorts = require('../config.json');
const morgan = require("morgan");
const userInstances = serverPorts.User.map((el) => {
    return {
        handledRequests: 0,
        url: el,
    }
})

const findingServer = () => {
    let minReq = Infinity;
    let url = "";
    let index = -1;
    userInstances.forEach((el, i) => {
        if (el.handledRequests < minReq && !el.isFailed) {
            minReq = el.handledRequests
            index = i
        }
    })
    return index;
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(morgan('tiny'));
let port = 3000;
let handler = async (req, res) => {
    let index = -1;
    try {
        // resetingFailedServer();
        index = findingServer();
        let url = userInstances[index].url;
        userInstances[index].handledRequests++;
        let response = await axios({
            method: "get",
            url : "http://" + url
        });
        // console.log(response.data);
        res.send(response.data);
    } catch (error) {
        console.log(error);
        if(error.message == 'server unavailable'){
            res.send(error.message)
        } else{
            sendEmail()
            handler(req,res)
        }
    }
};
app.get('/user', handler)
app.listen(port, () => {
    console.log("load balancer is listening to :", port);
})