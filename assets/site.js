document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const menu=document.querySelector('[data-menu]');if(menu){menu.addEventListener('click',()=>document.querySelector('.navlinks')?.classList.toggle('open'))}
