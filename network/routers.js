express = require("express"); 
const message = require("../components/message/network"); 

const routers = function(server){
    server.use("/message",message) //rutas cada vez que llamen a message llamen a message

}

module.exports = routers; 