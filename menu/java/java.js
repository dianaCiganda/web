const slider=document.querySelector("#slider");
let sliderSection=document.querySelectorAll(".slider_section");
let sliderSectionLast=sliderSection[sliderSection.length-1];
const btnLeft=document.querySelector("#btn_left");
const btnRigth=document.querySelector("#btn_rigth");
slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function move_next(){
    let sliderSectionFirts=document.querySelectorAll(".slider_section")[0];
    slider.style.marginLeft="-200%";
    slider.style.transition=("all 0.5s");
    setTimeout(function () {
        slider.style.transition=("none");
        slider.insertAdjacentElement('beforeend',sliderSectionFirts)
        slider.style.marginLeft="-100%";
       
    },500)
}
btnRigth.addEventListener("click",function(){
    move_next() });
   function preview(){
       let sliderSection=document.querySelectorAll(".slider_section");
    let sliderSectionLast=sliderSection[sliderSection.length-1];
        slider.style.marginLeft="0";
        slider.style.transition=("all 0.5s");
        setTimeout(function () {
            slider.style.transition=("none");
            slider.insertAdjacentElement('afterbegin',sliderSectionLast)
            slider.style.marginLeft="-100%";
           
        },500)
    }
    btnLeft.addEventListener("click",function(){
        preview() });
       setInterval(() => {
        move_next()
       }, 5000);