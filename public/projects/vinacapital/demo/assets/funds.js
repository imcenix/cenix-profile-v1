const menuButton=document.querySelector('.menu-btn');
const mainNav=document.querySelector('#main-nav');
menuButton?.addEventListener('click',()=>{const open=mainNav.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(open));});
mainNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('is-open');menuButton?.setAttribute('aria-expanded','false');}));

document.querySelectorAll('.fund-more').forEach(button=>button.addEventListener('click',()=>{
  const card=button.closest('.fund-card');
  const open=card.classList.toggle('is-open');
  button.setAttribute('aria-expanded',String(open));
}));

const voiceTrack=document.querySelector('[data-voice-track]');
const voiceStep=()=>voiceTrack?.querySelector('.voice')?.getBoundingClientRect().width+12||320;
document.querySelector('[data-voice-prev]')?.addEventListener('click',()=>voiceTrack?.scrollBy({left:-voiceStep(),behavior:'smooth'}));
document.querySelector('[data-voice-next]')?.addEventListener('click',()=>voiceTrack?.scrollBy({left:voiceStep(),behavior:'smooth'}));

const form=document.querySelector('.consult__form');
const status=document.querySelector('.form-status');
form?.addEventListener('submit',event=>{
  event.preventDefault();
  const required=[...form.querySelectorAll('[required]')];
  const missing=required.filter(field=>!field.value.trim());
  required.forEach(field=>field.classList.toggle('is-invalid',!field.value.trim()));
  status.hidden=false;
  if(missing.length){status.className='form-status is-error';status.textContent='Vui lòng hoàn tất các trường có dấu *.';missing[0].focus();return;}
  status.className='form-status';
  status.textContent='Đã ghi nhận thông tin trong bản demo. Biểu mẫu này chưa gửi dữ liệu ra ngoài.';
});
