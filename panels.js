// Number panel
document.getElementById("gen-num").addEventListener("click", function(){
    const min = parseInt(document.getElementById("min-num").value);
    const max = parseInt(document.getElementById("max-num").value);

    if(!min || !max){
        return;
    }else if(max < min){
        return;
    }

    document.getElementById("num-res").innerHTML = generateRandomNumber(min, max);
});

document.getElementById("reset-num").addEventListener("click", function(){
    document.getElementById("min-num").value = "";
    document.getElementById("max-num").value = "";
    document.getElementById("num-res").innerHTML = "0";
});

// String panel
document.getElementById("gen-str").addEventListener("click", function(){

});

document.getElementById("reset-str").addEventListener("click", function(){

});

// Color panel
document.getElementById("gen-color").addEventListener("click", function(){

});

document.getElementById("reset-color").addEventListener("click", function(){

});

// Date panel
document.getElementById("gen-date").addEventListener("click", function(){

});

document.getElementById("reset-date").addEventListener("click", function(){

});
