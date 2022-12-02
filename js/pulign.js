//=== UNIVERSAL SELECTOR FUNCTION ====///

const $=function(selector){
  return document.querySelector(selector)
}

const $$=function(selector){
  return document.querySelectorAll(selector)
}