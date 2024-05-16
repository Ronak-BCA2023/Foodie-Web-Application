

let dishesli = document.getElementById("dishesli");
let headerhovereffects = document.getElementsByClassName("hovereffects")[0];

dishesli.addEventListener("mousemove", function(){

    headerhovereffects.style.display = "flex";
    headerhovereffects.style.justifyContent = "center" 

})

dishesli.addEventListener("mouseleave", function(){

    headerhovereffects.style.display = "none"
})

