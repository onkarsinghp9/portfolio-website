function dark(){


    let colora="rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
    
    
    let colorb="rgb("+Math.floor(Math.random()*200)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
   
   
   
    let gradient="linear-gradient("+Math.floor(Math.random()*360)+"deg"+","+colora+", "+colorb+")";
    
    
    const elem=document.getElementById('bg').style.background=gradient;
    
    
    const card=document.getElementById('card').style.background=colora;



    const contact=document.getElementById('bcontainer').style.background=colorb;


document.getElementById("tname").innerHTML=(gradient);




}

dar=setInterval(dark,20000);

function stopChangeTheme(){
    clearInterval(dar);
}








 function play(){
game=document.getElementById('restart').style.display="inline";

nuh=0;
nuv=0;
const ba=document.getElementById('ball');
const bar=document.getElementById('bar');

let a=window.getComputedStyle(ba).getPropertyValue('top');
    a=a.replace("px","00");
    a=a*18/127.47;
    
let b=window.getComputedStyle(ba).getPropertyValue('left');
    b=b.replace("px","00");
    b=b*18/74.1904;
    

var rc=Math.floor((Math.random()*100)%2);

if(rc==0){
    c=0.8;
}
else{
    c=-0.8;
}

var rd=Math.floor((Math.random()*100)%2);

if(rd==0){
    d=Math.random();
}
else{
    d=-Math.random();
}

var point=0;

function checkdimentions(){
    heib= window.getComputedStyle(bar).getPropertyValue('height'); 
    heib=heib.replace("px","00");
    heib=heib*100/window.innerHeight;
    heib1=heib+1;
    heib2=heib+2;
    topb=window.getComputedStyle(bar).getPropertyValue('top');
    topb=topb.replace("px",00);
    topb=topb*100/window.innerHeight;
    topb2=topb-4;
    topheib=topb+heib;
    topheib1=topheib-1;

   widb=window.getComputedStyle(bar).getPropertyValue('width');
   widb=widb.replace("px","00");
   widb=widb*100/window.innerWidth;
   widb1=widb+1;
   widb2=widb+2;
   lefb=window.getComputedStyle(bar).getPropertyValue('left');
   lefb=lefb.replace("px","00");
   lefb=lefb*100/window.innerWidth;
   lefb2=lefb-5;
   leftwidb=widb+lefb-2;
}
checkdimentions();



function move(point){
    
    if(c>0 && a>93 || c<0 && a<5){
        changey();
        
    };

    
    if(b<93 && b>3 && d==0.4){
    
        
    }
    
    else if(d>0 && b>93 || d<0 && b<3){
        changex();
        
    }
    
    if(a>93){
        var over="GAME OVER";
        gameOver(over);
    }
    
    if(a<5){
         
         var point=point+1;
         up();
    }
    
    if(a<topheib && a>topb2 && b>lefb2 && b<leftwidb){
        hit();
    }





a=a+c;
vy=a+"vh";
ba.style.top=vy;

b=b+d;
vx=b+"vw";
ba.style.left=vx;



}


function hit(){
    if(a<topheib && a>topb && a>topheib1 || a>topb2 && c>0 && a<topb){
        changey();
        nuv++;
        textv="vertical("+nuv+")";
        document.getElementById('testv').innerText=textv;
        
        
    }
    else if(b<leftwidb){
        changex();
        nuh++;
        texth="horizontal("+nuh+")";
        document.getElementById('testh').innerText=texth;
        
        
    }
  bar.style.animationName="collision";
    
}
function anistop(){
    bar.style.animationName="no";
}
function up(){
    point++;
    document.getElementById('point').innerText=point
    
}
function changex(){
    d=d-2*d;
}
function changey(){
    c=c-2*c;
}

const mov=setInterval(move,10);
const anisto=setInterval(anistop,1000);
const check=setInterval(checkdimentions,10);


document.getElementById('restart').addEventListener("click",restart);
function restart(){
    var pause=" &nbsp PAUSED";
    gameOver(pause);
}


function gameOver(text){
    a=83;
    b=35;
    document.getElementById('testv').innerHTML="<span style='font-size:10vh;font-weight:900'><br><br><br><br>"+text+"<br><span style='margin-left:10vw;font-size:5vh'>Your score is "+point+"</span><br><button onclick='play()'; style='margin-left:20vw;border-radius:40%;height:8vh;width:30vw;background:rgba(0,0,0,0.2);color:#fff;font-size:4vh;'>RESTART</button></span>";
    clearInterval(check);
    clearInterval(anisto);
    clearInterval(mov);
}

}
//play function ends here...



function position(event){
    
    var posx=event.touches[0].clientX;
    if(posx<78){
        return;
    }
    else if(posx>350){
        return;
    }
    posx=posx-70;
    posx=posx+"px";
    
    bar.style.left=posx;
    
    
    
}



function getScrollPosition(){
    sp=document.documentElement.scrollTop;
    if(sp>50 && sp<500){
      document.getElementById('doraemon').style.transform="rotateZ(15deg) scale3d(0.5,0.5,0.5) translate3d(-200px,-500px,0)";
    }
    else if(sp>800 && sp<1800){
      document.getElementById('doraemon').style.transform="rotateZ(15deg) scale3d(0.5,0.5,0.5) translate3d(-250px,-700px,0)";
    }
      else if(sp>1800 && sp<2000){
          document.getElementById('doraemon').style.transform="rotateZ(15deg) scale3d(0.5,0.5,0.5) translate3d(-200px,-500px,0)";
    }
    
}





//a----c---y
//b----d---x

