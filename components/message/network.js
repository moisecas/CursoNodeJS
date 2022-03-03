//recibir la petición y procesarla, archivo separado para todas las rutas 
//se requiere importar express

const express = require("express");

const response = require("../../network/response");  //se debe seleccionar la ruta correcta, network peticiones y en response las funciones

const router = express.Router(); 

const controller = require("./controller"); 


router.get("/message", function(req,res){ //añadir una petición se usa "/" para la respuesta, la ruta. La función recibe dos cosas req y res 
    console.log(req.headers); //cabecera 
    res.headers({ 
        "custom-header": "nuestro valor personalizado", //darle cabeceras especificas al cliente
    })
    //res.send("lista de mensajes"); //rta a la petición 
    response.sucess(req,res, "lista de mensajes"); //llame al modulo de response 

});

router.post("/", function(req,res){ //para hacer otra petición 
    
    controller.addMessage(req.body.user, req.body.message)
        then(()=>{
            response.sucess(req,res, "creado",201); //llame al modulo de response
        });
        
         
});

module.exports=router; //llevarnos las rutas get y post al router

//response.error(req,res, "error inesperado",400, "error controlador"); //llame al modulo de response