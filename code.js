function printA(a){
    console.log(a);
}
function printB(a){
    alert(a);
}
function Cwidth(a,b){
document.getElementById(a).style.width=b+'px';
}
function Cheight(a,b){
document.getElementById(a).style.height=b+'px';
}
function Csize(a,b,c){
    document.getElementById(a).style.width=b+'px';
    document.getElementById(a).style.height=c+'px';
}
function Ccolor(a,b){
    document.getElementById(a).style.backgroundColor=b;
}
function Cposition(a,c,d){
    document.getElementById(a).style.top=c+'px';
    document.getElementById(a).style.left=d+'px';
}
function Cposition(a,b){
    document.getElementById(a).style.position=b;
}
function Ctop(a,b){
    document.getElementById(a).style.top=b+'px';
}
function Cleft(a,b){
    document.getElementById(a).style.left=b+'px';
}

const dm=document.getElementById('maind');
const en=document.getElementById('enter');
const or=document.getElementById('orders');
let p=1;
 let bi='true';
function main(){
    bi='false';
    dm.style.backgroundSize='cover';
    if(p>=5){
        localStorage.setItem('item',document.getElementById("orders").value);
        setTimeout(endf,300);
    }
   if(p==3){
      dm.style.backgroundImage='url("Untitled - Copy.png")';
      document.body.style.backgroundImage='url("foodbg.jpg")';
       dm.style.opacity=0.9;
   };
   if(p==1){
   or.style.width='395px';
   or.style.left='551px';
   or.style.top='450px';
   dm.style.backgroundColor="blue";
   dm.style.backgroundImage='url("Untitled.png")';
   dm.style.width='400px';
   dm.style.height='400px';
   dm.style.left='550px';
   dm.style.top='10px';
   document.body.style.backgroundImage='url("download.jpg")';
   document.body.style.backgroundSize='1550px 900px';
   en.style.width='200px';
   en.style.height='100px';
   en.style.top='300px';
   en.style.left='200px';
   const div1 = document.createElement("div");
   div1.style.backgroundImage='url("foodbg.jpg")';
   dm.appendChild(div1);
   div1.style.position='relative';
   div1.style.top='200px';
  
   };
    p=p+1;

  
   
}
    function st(){
        
        st1(); 
        dm.style.opacity=0.8;
        document.body.style.opacity=10;
        
        
        
        
    }
    function st1(){
        if(bi=='true'){
      setTimeout(bc,2500);
      dm.style.backgroundImage='url("f1.jpg")';
        }
    }
    function bc(){
        if(bi=='true'){
         dm.style.backgroundImage='url("foodbg.jpg")';
         setTimeout(bc2,2500);
        }
    }
        function bc2(){
            if(bi=='true'){
         dm.style.backgroundImage='url("download.jpg")';
         dm.style.backgroundSize='500px 300px';
         setTimeout(st1,2500);
            }
    }

function endf(){
    Ccolor('maind',null);
    dm.innerHTML='YOUR ORDER HAS BEEN SENT';
    dm.style.backgroundImage=null;
    dm.style.webkitTextFillColor='black';
    dm.style.fontSizeAdjust=2;
    Cheight('maind',0.0000000000000001);
    Ctop('orders',10^1000);
    dm.style.textDecorationColor='aqua';
}














































































































































































