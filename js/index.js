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
  navMenu.classList.toggle('block');
  
  if(navMenu.classList.contains('block')){
    menuBtn.innerHTML=`<i class='bx bx-x'></i>`;
  }
  else{
    menuBtn.innerHTML=`<i class='bx bx-menu'></i>`
  }
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

let open=$('.btnQ');
let open1=$('.btnQ1');
let open2=$('.btnQ2');
let open3=$('.btnQ3');
let open4=$('.btnQ4');
let open5=$('.btnQ5');
let open6=$('.btnQ6');
let open7=$('.btnQ7');
let TextContent=$('.text-one');
let TextContent1=$('.text-two');
let TextContent2=$('.text-three');
let TextContent3=$('.text-four');
let TextContent4=$('.text-five');
let TextContent5=$('.text-six');
let TextContent6=$('.text-seven');
let TextContent7=$('.text-eight');

open.addEventListener('click',()=>{
  TextContent.classList.toggle('none')
})
open1.addEventListener('click',()=>{
  TextContent1.classList.toggle('none');
})
open2.addEventListener('click',()=>{
  TextContent2.classList.toggle('none');
})
open3.addEventListener('click',()=>{
  TextContent3.classList.toggle('none');
})
open4.addEventListener('click',()=>{
  TextContent4.classList.toggle('none');
})
open5.addEventListener('click',()=>{
  TextContent5.classList.toggle('none');
})
open6.addEventListener('click',()=>{
  TextContent6.classList.toggle('none');
})
open7.addEventListener('click',()=>{
  TextContent7.classList.toggle('none');
})

var loader=$('#loader');

window.addEventListener("load", ()=>{
  loader.style.display="none";
})