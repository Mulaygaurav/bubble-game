
var clutter= "";
var timer =60;
var score=0;
var hitrn=0;
function makebubble(){
  
for(var i=1;i<=168;i++){
    var rn=Math.floor(Math.random()*10);
clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}


function runtimer(){
var timerint=setInterval(function(){
    if(timer>0){
    timer--;
    document.querySelector("#timerval").innerHTML=timer;
    }else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML=`<h1>Game Over !!! <br> Your Score is: ${score}</h1>`;
    }
    
}, 1000);
}

function getNewhit(){
     hitrn =Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
     makebubble();
    
}

function increseScore(){
    score +=10;
    document.querySelector("#score").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickitem=Number(dets.target.textContent);
    if(clickitem===hitrn){
        increseScore();
        getNewhit();
       
    }
})

runtimer();
makebubble();
 

