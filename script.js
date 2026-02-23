// let appointment=document.getElementById('appointmentWrapper');
// let loginLink= document.getElementById('loginLink');
// let registerLink=document.getElementById('registerLink');
// let reg=document.getElementById("registerId");

// loginLink.onclick=function(){
//     reg.style.height="0";
// };


let scrollContainer=document.querySelector(".panel-3");
let backBtn = document.getElementById("backbtn");
let nextBtn = document.getElementById("nextbtn");
let loader= document.getElementById("preloader");
let subloader= document.getElementById("sub-preloader");

window.addEventListener("load", function(){
    loader.style.display = "none" ;
});
window.addEventListener("load", function(){
    subloader.style.display = "none" ;
});

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft +=evt.deltaY;

});
nextBtn.addEventListener("click" , ()=>{

    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft -= 900;
});

