const res=document.getElementById("res");

function run(){
 let r=+resolution.value;
 if(!r){res.innerText="Enter value";return;}
 let opt=Math.round(r*0.75);
 res.innerText=`Recommended export: ${opt}px`;
}

