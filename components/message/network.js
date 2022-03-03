//recibir la petición y procesarla, archivo separado para todas las rutas 
//se requiere importar express

const express = require("express");

const router = express.Router(); 


router.get("/message", function(req,res){ //añadir una petición se usa "/" para la respuesta, la ruta. La función recibe dos cosas req y res 
    console.log(req.headers); //cabecera 
    res.headers({ 
        "custom-header": "nuestro valor personalizado", //darle cabeceras especificas al cliente
    })
    //res.send("lista de mensajes"); //rta a la petición 
    response.sucess(req,res, "lista de mensajes"); //llame al modulo de response 

});

router.post("/message", function(req,res){ //para hacer otra petición 
    console.log(req.query); //para  trabajar con el query 
    if (req.query.error == "ok"){
        response.error(req,res, "error inesperado",500); //llame al modulo de response

    }else{
        response.sucess(req,res, "creado",201); //llame al modulo de response
    }
    
    //res.status(201).send({error:"" , body: "creado"  }); //rta a la petición, podemos enviar un objeto o un array 

});