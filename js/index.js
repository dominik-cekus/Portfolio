const boardTextDesktop = document.querySelector('.content__desktop .board__text');
const boardCursorDesktop = document.querySelector('.content__desktop .board__cursor');
const tableTextDesktop = ["Hello!\n","My name is Dominic.\n","I am glad you came into my website.\n","The tab ABOUT ME will help you get to know me.\n","If you get tired, in the GAME tab there is a\nsurprise waiting for you.\n","Do not forget to contact me, leave a message\nin the tab CONTACT."];

const cursorAnimationDesktop = () => {
    boardCursorDesktop.classList.toggle('active');
   }
   setInterval(cursorAnimationDesktop, 400);

   let indexLetter=0;
   let indexText=0;
   function addLetterDesktop()
       { 
                boardTextDesktop.setAttribute('style', 'white-space: pre');  
               boardTextDesktop.textContent += tableTextDesktop[indexText][indexLetter];
               indexLetter++;
               if(indexLetter == tableTextDesktop[indexText].length ) {
                       return setTimeout(()=>{
                           indexLetter = 0;
                           indexText++;
                           addLetterDesktop();
                       },700)
               }
               if(indexText===tableTextDesktop.length){return}
               setTimeout(addLetterDesktop,100)
       }


const mobileMenu = document.querySelector('.menu__icon');
mobileMenu.addEventListener("click",()=>{
    document.querySelector('.menu__list').classList.toggle('activeNavigation');
})
document.querySelectorAll('.footer, .content__mobile').forEach((e)=>{e.addEventListener("click",()=>{
    document.querySelector('.menu__list').classList.remove('activeNavigation');
})})


const boardTextMobile = document.querySelector('.content__mobile .board__text');
const boardCursorMobile = document.querySelector('.content__mobile .board__cursor');
const tableTextMobile = ["Hello!\n","My name is Dominic.\n","I am glad you came into my\nwebsite.\n","The tab ABOUT ME will help you\nget to know me.\n","If you get tired, in the GAME\ntab there is a surprise\nwaiting for you.\n","Do not forget to contact me,\nleave a message in the\ntab CONTACT."];


const cursorAnimationMobile = () => {
    boardCursorMobile.classList.toggle('active');
   }
   setInterval(cursorAnimationMobile, 400);

   let indexLetterMobile=0;
   let indexTextMobile=0;
   function addLetterMobile()
       { 
                boardTextMobile.setAttribute('style', 'white-space: pre');  
               boardTextMobile.textContent += tableTextMobile[indexTextMobile][indexLetterMobile];
               indexLetterMobile++;
               if(indexLetterMobile == tableTextMobile[indexTextMobile].length ) {
                       return setTimeout(()=>{
                           indexLetterMobile = 0;
                           indexTextMobile++;
                           addLetterMobile();
                       },700)
               }
               if(indexTextMobile===tableTextMobile.length)
               {return}
               setTimeout(addLetterMobile,100);
       }

addLetterDesktop();
addLetterMobile();