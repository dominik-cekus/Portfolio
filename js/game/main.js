const game = new GameMobile(200);
const game1 = new GameDesktop(200);

const mobileMenu = document.querySelector('.menu__icon');
mobileMenu.addEventListener("click",()=>{
    document.querySelector('.menu__list').classList.toggle('activeNavigation');
    document.querySelector('.content__description').classList.toggle('content__description--disabled');
})
document.querySelectorAll('.footer, .content__mobile').forEach((e)=>{e.addEventListener("click",()=>{
    document.querySelector('.menu__list').classList.remove('activeNavigation');
    document.querySelector('.content__description').classList.remove('content__description--disabled');
})})