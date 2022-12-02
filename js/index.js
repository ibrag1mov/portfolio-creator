"use strict"


let btnTop=$('.top');

window.addEventListener("scroll", (e)=>{
  if(window.scrollY > 300){
    btnTop.style.display="block"
  }
  else{
    btnTop.style.display="none"
  }
})

let bntBack=$('#projectBack');
let btnNext=$('#projectNext');
let projCards=$('#projectCards');



let i=0;

bntBack.addEventListener('click', (evt)=>{
  i--
  if(i<0){
  i=$$('.carusel-project').length-2;
  }
  projCards.style.transform=`translateX(${-i*510}px)`
})

btnNext.addEventListener('click', (evt)=>{
  i++
  if(i>$$('.carusel-project').length-2){
  i=0
  }
  projCards.style.transform=`translateX(${-i*510}px)`
})


const indicators=$('.product__wrapper__carousel-indicators');
const show=$('#img-one');


let a="";
indicators.addEventListener('click', (e)=>{
  a=show.src;
  show.src=e.target.src;
  e.target.src=a;
})

