const res=document.getElementById("res");

function run(){
 let p=+paths.value,pt=+points.value;
 if(!p||!pt){res.innerText="Enter values";return;}
 let score=p+(pt*0.5);
 res.innerText=score>500?"High complexity":"Optimized vector";
}

