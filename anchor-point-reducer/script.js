const res=document.getElementById("res");

function run(){
 let p=+points.value,t=+target.value;
 if(!p||!t){res.innerText="Enter values";return;}
 let result=Math.floor(p*(1-t/100));
 res.innerText=`Reduced points: ${result}`;
}

