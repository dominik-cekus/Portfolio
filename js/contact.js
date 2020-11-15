const mobileMenu = document.querySelector('.menu__icon');
mobileMenu.addEventListener("click",()=>{
    document.querySelector('.menu__list').classList.toggle('activeNavigation');
})
document.querySelectorAll('.footer, .content__mobile').forEach((e)=>{e.addEventListener("click",()=>{
    document.querySelector('.menu__list').classList.remove('activeNavigation');
})})

const formNameDesktop= document.querySelector('.content__desktop .form__name');
const formMailDesktop= document.querySelector('.content__desktop .form__mail');
const formSubmitDesktop = document.querySelector('.content__desktop .form__submit');
const formMessageDesktop = document.querySelector('.content__desktop .form__message');
formSubmitDesktop.addEventListener("click",(e)=>{
    e.preventDefault();
    formSubmitDesktop.disabled = true;
    noAllWhiteSpaces = /^\s*$/;
    letterAndSpacesFirstUppercase = /^([A-Z][a-z]*\s*)*$/;
    validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(formNameDesktop.value === "" || noAllWhiteSpaces.test(formNameDesktop.value) || !letterAndSpacesFirstUppercase.test(formNameDesktop.value))
    {
        alert('Name is incorrect');
        formNameDesktop.value = "";
        formSubmitDesktop.disabled = false;
    }
    else if(formMailDesktop.value === "" || noAllWhiteSpaces.test(formMailDesktop.value)
    || !validEmail.test(formMailDesktop.value))
    {
        alert('Mail is incorrect');
        formMailDesktop.value = "";
        formSubmitDesktop.disabled = false;
    }
    else{
        formSubmitDesktop.disabled = false;
        alert('Message sent');
        formMessageDesktop.value = "";
        formMailDesktop.value = "";
        formNameDesktop.value = "";
    }
})

const formNameMobile= document.querySelector('.content__mobile .form__name');
const formMailMobile= document.querySelector('.content__mobile .form__mail');
const formSubmitMobile = document.querySelector('.content__mobile .form__submit');
const formMessageMobile = document.querySelector('.content__mobile .form__message');
formSubmitMobile.addEventListener("click",(e)=>{
    e.preventDefault();
    formSubmitMobile.disabled = true;
    noAllWhiteSpaces = /^\s*$/;
    letterAndSpacesFirstUppercase = /^([A-Z][a-z]*\s*)*$/;
    validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(formNameMobile.value === "" || noAllWhiteSpaces.test(formNameMobile.value) || !letterAndSpacesFirstUppercase.test(formNameMobile.value))
    {
        alert('Name is incorrect');
        formSubmitMobile.disabled = false;
    }
    else if(formMailMobile.value === "" || noAllWhiteSpaces.test(formMailMobile.value)
    || !validEmail.test(formMailMobile.value))
    {
        alert('Mail is incorrect');
        formSubmitMobile.disabled = false;
    }
    else{
        formSubmitMobile.disabled = false;
        alert('Message has been sent.');
        formNameMobile.value = "";
        formMailMobile.value = "";
        formMessageMobile.value = "";
    }
})
