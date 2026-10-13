const menuButton=document.querySelector('.menu-btn');
const mainNav=document.querySelector('#main-nav');
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
menuButton?.addEventListener('click',()=>{const open=mainNav.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(open));});
mainNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('is-open');menuButton?.setAttribute('aria-expanded','false');}));

const switchers=[...document.querySelectorAll('[data-switch]')];
const phones=[...document.querySelectorAll('[data-phone]')];
function switchPhone(index){phones.forEach((phone,i)=>phone.classList.toggle('is-active',i===index));}
switchers.forEach(card=>{
  const index=Number(card.dataset.switch);
  card.addEventListener('mouseenter',()=>switchPhone(index));
  card.addEventListener('focus',()=>switchPhone(index));
  card.addEventListener('click',()=>switchPhone(index));
});

const hero=document.querySelector('.mio-hero');
const heroButtons=[...document.querySelectorAll('[data-hero-to]')];
const campaignPanel=document.querySelector('[data-hero-panel="1"]');
let heroIndex=0;
let heroTimer;
function showHero(index){
  heroIndex=index;
  hero?.classList.toggle('is-campaign',index===1);
  campaignPanel?.setAttribute('aria-hidden',String(index!==1));
  heroButtons.forEach((button,i)=>{
    button.classList.toggle('is-active',i===index);
    button.setAttribute('aria-selected',String(i===index));
  });
}
function startHeroRotation(){
  window.clearInterval(heroTimer);
  if(reduceMotion)return;
  heroTimer=window.setInterval(()=>showHero((heroIndex+1)%2),8500);
}
heroButtons.forEach(button=>button.addEventListener('click',()=>{
  showHero(Number(button.dataset.heroTo));
  startHeroRotation();
}));
hero?.addEventListener('mouseenter',()=>window.clearInterval(heroTimer));
hero?.addEventListener('mouseleave',startHeroRotation);
hero?.addEventListener('focusin',()=>window.clearInterval(heroTimer));
hero?.addEventListener('focusout',startHeroRotation);
startHeroRotation();

const screenCarousel=document.querySelector('.mio-feature__phoneframe');
const screenSlides=[...document.querySelectorAll('[data-screen-slide]')];
let screenIndex=0;
let screenTimer;
function showScreen(index){
  if(!screenSlides.length)return;
  screenIndex=(index+screenSlides.length)%screenSlides.length;
  screenSlides.forEach((slide,i)=>{
    slide.classList.toggle('is-active',i===screenIndex);
    slide.setAttribute('aria-hidden',String(i!==screenIndex));
  });
}
function startScreenRotation(){
  window.clearInterval(screenTimer);
  if(reduceMotion)return;
  screenTimer=window.setInterval(()=>showScreen(screenIndex+1),3800);
}
screenCarousel?.addEventListener('mouseenter',()=>window.clearInterval(screenTimer));
screenCarousel?.addEventListener('mouseleave',startScreenRotation);
showScreen(0);
startScreenRotation();
