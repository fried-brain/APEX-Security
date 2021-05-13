const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send('APEX is Secured Now!')
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Web Server is Ready!")});
}
module.exports = keepAlive;