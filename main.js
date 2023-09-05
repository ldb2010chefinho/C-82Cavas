canvas = document.getElementById("meuCanvas");
ctx= canvas.getContext("2d");
 var mouseEvent ="";
 var ultimoX,ultimoY;
 var color="darkgreen";
 var widthLine = 2;
 var radius = 40;

 canvas.addEventListener("mousedown",myMouseDown);
 function myMouseDown(e){
    color =document.getElementById("cor").value;
    widthLine =document.getElementById("espessura").value;
    radius =document.getElementById("radius").value;
    mouseEvent = "mouseDown"
 };

 canvas.addEventListener("mouseup",myMouseUp);
 function myMouseUp(e){
    mouseEvent = "mouseUp"
 };

 canvas.addEventListener("mouseleave",myMouseLeave);
 function myMouseLeave(e){
    mouseEvent = "mouseLeave"
 };

 canvas.addEventListener("mousemove",myMouseMove);
 function myMouseMove(e){
    var positionMouseX = e.clientX-canvas.offsetLeft;
    var positionMouseY = e.clientY-canvas.offsetTop;
    if(mouseEvent="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
        console.log("Última posição das coordenadas x e y = ");
        console.log("x = " + ultimoX + "y = " + ultimoY);
        ctx.arc(positionMouseX, positionMouseY,radius,0 , 2*Math.PI)
        ctx.stroke();
    };
        
 };

 //Limpar a tela

 function limpar(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
 };

