const { default: axios } = require("axios");
let counter = 0;
const reqs = async ()=>{
    try {
        console.log(counter);
        let res = await axios({
            method: "get",
            url: "http://localhost:3000/user"
        });
        counter++;
    } catch (error) {
        console.log(counter);
        // process.exit();
    }
}
    
setInterval(() => {
    reqs();
}, 0);


