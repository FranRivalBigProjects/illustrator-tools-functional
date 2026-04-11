const res=document.getElementById("res");

function run(){
 let s=+size.value;
 if(!s){res.innerText="Enter value";return;}
 let reduced=s*0.65;
 res.innerText=`Reduced size: ${reduced.toFixed(2)} MB`;
}

