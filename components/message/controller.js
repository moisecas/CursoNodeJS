//definir todo lo que sucede creando las funciones necesarias 

function addMessage(user,message){
    if (!user || !message){
        console.error("[messageController] no hay usuario o mensaje"); 
        reject("los datos son incorrectos");
        return false; 
    }
    return new Promise((resolve, reject)=>{
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }; 
        console.log(fullMessage); 
        
    });  
     


}

module.exports ={
    addMessage, 
}; 