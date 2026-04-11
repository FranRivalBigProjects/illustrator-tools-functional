const res=document.getElementById("res");

function run(){
 let s=+size.value;
 if(!s){res.innerText="Enter value";return;}
 let reduced=s*0.7;
 res.innerText=`Optimized size: ${reduced.toFixed(2)} KB`;
}

