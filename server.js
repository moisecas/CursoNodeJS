const express = require("express"); 
const bodyParser = require("body-parser"); //se declara el body

const router = require("./network/routers");  

//const router = express.Router(); //definir router, separar peticiones, en insomnia (aplicacion) probamos

const routers = require("./components/message/network"); //definiremos router mensajes 

var app = express(); 
app.use(bodyParser.json());  //se usa el bodyparser, hay que enviarlo por json, uno de los metodos 
app.use(bodyParser.urlencoded({extended: false}));  //lo mismo se hace acá se recomienda dejarlo en false 
//app.use(router); //añadir router a express

router(app); 




//app.use("/", function(req,res){
    //res.send("hola");
//});

app.use("/app", express.static("public")); 


app.listen(3000);
console.log("la aplicación esta recibiendo en http://localhost:3000"); 

//se instalo nodemon, para iniciarlo use npx nodemon server.js en consola, nodemon para que se tomen los cambios en tiempo de ejecución
//se intala body parser