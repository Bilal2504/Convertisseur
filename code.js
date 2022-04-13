let dollar = document.getElementById("dollar");
let euro = document.getElementById("euro");

dollar.addEventListener("input", function()
{convPoids(this.id, this.value);});
euro.addEventListener("input", function(){convPoids(this.id, this.value);});

function convPoids(id, valeur){
    if(id == "dollar"){
        euro.value = valeur * 0.83 ;
    }else if(id == "euro"){
        dollar.value = valeur * 1.2;
    }
}