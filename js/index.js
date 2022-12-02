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
  projCards.style.transform=`translateX(${-i*420}px)`
})

btnNext.addEventListener('click', (evt)=>{
  i++
  if(i>$$('.carusel-project').length-2){
  i=0
  }
  projCards.style.transform=`translateX(${-i*450}px)`
})


const indicators=$('.product__wrapper__carousel-indicators');
const show=$('#img-one');


let a="";
indicators.addEventListener('click', (e)=>{
  a=show.src;
  show.src=e.target.src;
  e.target.src=a;
})

let menuBtn=$('.menu-btn');
let navMenu=$('.dropdown');

menuBtn.addEventListener('click',()=>{
  navMenu.classList.toggle('none')
})


let next=$('.next');
let back=$('.back');
let cards=$('#testimonials-cards');

let x=0;

next.addEventListener('click', (event)=>{
  x++
  if(x>$$('.testimonials__wrapper__cards-card').length-1){
    x=0;
    }
  
  cards.style.transform=`translateX(${-x*1250}px)`
})

back.addEventListener('click', (event)=>{
  x--
  if(x<0){
  x=$$('.testimonials__wrapper__cards-card').length-1;
  }
  cards.style.transform=`translateX(${-x*1250}px)`
})

let open=$$('.faq__wrapper__questions-list-item-btn');
let TextContent=$$('.faq__wrapper__questions-list-item-text');


console.log(open);

open.addEventListener('click',(event)=>{
console.log(event.target);
})