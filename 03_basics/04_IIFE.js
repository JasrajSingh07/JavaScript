// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function chai(){
    // named IIFE
    console.log("DB connected");
    
})();

( (name)=>{
    console.log(`DB connected two ${name}`);
    
})("jasraj")