const res=document.getElementById("res");

function run(){
 let p=+paths.value;
 if(!p){res.innerText="Enter value";return;}
 let clean=Math.floor(p*0.2);
 res.innerText=`Removable paths: ${clean}`;
}

