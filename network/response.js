const { Router } = require("express");
const { status } = require("express/lib/response");

exports.sucess = function(req,res, message){
    res.send(status || 200).send({
        error: "",
        body: message
    }); //tambien puedo enviarle un objeto 


}
exports.error = function(req,res,message,status,details){
    console.error("[respoonse error]" + details); 
    res.send(status || 500).send({
        error: error,
        body: ""
    }); //tambien puedo enviarle un objeto 
    
} 


