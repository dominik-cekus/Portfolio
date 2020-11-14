const mobileMenu = document.querySelector('.menu__icon');
mobileMenu.addEventListener("click",()=>{
    document.querySelector('.menu__list').classList.toggle('activeNavigation');
})
document.querySelectorAll('.footer, .content__mobile').forEach((e)=>{e.addEventListener("click",()=>{
    document.querySelector('.menu__list').classList.remove('activeNavigation');
})})
document.querySelector('.form__submit').addEventListener("click",(e)=>{
    
})