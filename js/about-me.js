const mobileMenu = document.querySelector('.menu__icon');
mobileMenu.addEventListener("click",()=>{
    document.querySelector('.menu__list').classList.toggle('activeNavigation');
})
document.querySelectorAll('.footer, .content__mobile').forEach((e)=>{e.addEventListener("click",()=>{
    document.querySelector('.menu__list').classList.remove('activeNavigation');
})})

const personProperty= [
    {
    title: `Personal data`,
    pText: `Name: Dominik Cekus\n\nDate of birth: 20.11.1997\n\nMail: dominik.cekus@gmail.com\n\nLinkedin: linkedin.com/in/dominikcekus\n\nGitHub: https://github.com/dominik-cekus/Portfolio`,
    backgroundImgUrl : "./images/my-photo.jpg",
    h1color: "#ddd",
    pColor: "#ddd",
    },
    {
    title: "Education",
    pText: `AGH University of Science and Technology\n\n\nOil&Gas Engineering\nBachelor degree 2016-2020 completed\n\nComputer science in Environmental Science\nBachelor degree 2018-2022`,
    backgroundImgUrl : "./images/agh.jpg",
    h1color: "#00b4d8",
    pColor: "#ddd",
    },
    {   
    title:  "Skills",
    pText: `HTML, CSS, JavaScript (intermediate)\n\nR (basic), Python (basic) PostgreSQL (basic)\nMS Office, AutoCAD\n\nLanguages\nEnglish – intermediate level\nPolish – native`,
    backgroundImgUrl : "./images/skills.jpg",
    h1color: "#e6b8a2",
    pColor: "#ddd",
    },
    {  
    title:   "Hobbies",
    pText: `Cooking\n\nTravelling\n\nMotorization\n\nInnovation Technologies\n\nJournalism\n\nFootball`,
    backgroundImgUrl : "./images/hobbies.jpg",
    h1color: "#ddd",
    pColor: "#ddd",
    }
];
   
const listOfPropertiesMobile = [...document.querySelectorAll('.content__mobile .background__dots span')];
const listOfPropertiesDesktop = [...document.querySelectorAll('.content__desktop .background__dots span')];

function initialSettingsMobile()
{
    document.querySelector('.content__mobile  .description__title').textContent = `${personProperty[0].title}`;
    document.querySelector('.content__mobile .background__slider').setAttribute('src',`${personProperty[0].backgroundImgUrl}`);
    document.querySelector('.content__mobile  .description__title').style.color = `${personProperty[0].h1color}`;
    document.querySelector('.content__mobile #dots__about').classList.add('active');
    document.querySelector('.content__mobile  .background__slider-shadow').style.backgroundColor = `rgba(0,0,0,0.8)`;
    document.querySelector('.content__mobile  .description__text').textContent = `${personProperty[0].pText}`;
    document.querySelector('.content__mobile  .description__text').style.color = `${personProperty[0].pColor}`;
    
}
function initialSettingsDesktop()
{
    document.querySelector('.content__desktop  .description__title').textContent = `${personProperty[0].title}`;
    document.querySelector('.content__desktop .background__slider').setAttribute('src',`${personProperty[0].backgroundImgUrl}`);
    document.querySelector('.content__desktop  .description__title').style.color = `${personProperty[0].h1color}`;
    document.querySelector('.content__desktop #dots__about').classList.add('active');
    document.querySelector('.content__desktop  .background__slider-shadow').style.backgroundColor = `rgba(0,0,0,0.7)`;
    document.querySelector('.content__desktop  .description__text').textContent = `${personProperty[0].pText}`;
    document.querySelector('.content__desktop  .description__text').style.color = `${personProperty[0].pColor}`;
    
}

function changePersonPropertiesMobile()
{
        document.querySelector('.content__mobile  .description__title').textContent = `${personProperty[listOfPropertiesMobile.findIndex(item => item.classList.contains('active'))].title}`;
        document.querySelector('.content__mobile  .description__title').style.color = `${personProperty[listOfPropertiesMobile.findIndex(item => item.classList.contains('active'))].h1color}`;
        document.querySelector('.content__mobile .background__slider').setAttribute('src',`${personProperty[listOfPropertiesMobile.findIndex(item => item.classList.contains('active'))].backgroundImgUrl}`);
        document.querySelector('.content__mobile  .description__text').style.color = `${personProperty[listOfPropertiesMobile.findIndex(item => item.classList.contains('active'))].pColor}`;
        document.querySelector('.content__mobile  .description__text').textContent = `${personProperty[listOfPropertiesMobile.findIndex(item => item.classList.contains('active'))].pText}`;
}
function changePersonPropertiesDesktop()
{
        document.querySelector('.content__desktop  .description__title').textContent = `${personProperty[listOfPropertiesDesktop.findIndex(item => item.classList.contains('active'))].title}`;
        document.querySelector('.content__desktop  .description__title').style.color = `${personProperty[listOfPropertiesDesktop.findIndex(item => item.classList.contains('active'))].h1color}`;
        document.querySelector('.content__desktop .background__slider').setAttribute('src',`${personProperty[listOfPropertiesDesktop.findIndex(item => item.classList.contains('active'))].backgroundImgUrl}`);
        document.querySelector('.content__desktop  .description__text').style.color = `${personProperty[listOfPropertiesDesktop.findIndex(item => item.classList.contains('active'))].pColor}`;
        document.querySelector('.content__desktop  .description__text').textContent = `${personProperty[listOfPropertiesDesktop.findIndex(item => item.classList.contains('active'))].pText}`;
}


function automaticChangeDesktop()
{
    let actProperty = listOfPropertiesDesktop.findIndex(item => item.classList.contains('active'));
    actProperty++;
    if(actProperty==listOfPropertiesDesktop.length)
    {
        actProperty=0;
    }
    listOfPropertiesDesktop[listOfPropertiesDesktop.findIndex(item => item.classList.contains('active'))].classList.remove('active');
    listOfPropertiesDesktop[actProperty].classList.add('active');
    changePersonPropertiesMobile();
    changePersonPropertiesDesktop();

}
function automaticChangeMobile()
{
    let actProperty = listOfPropertiesMobile.findIndex(item => item.classList.contains('active'));
    actProperty++;
    if(actProperty==listOfPropertiesMobile.length)
    {
        actProperty=0;
    }
    listOfPropertiesMobile[listOfPropertiesMobile.findIndex(item => item.classList.contains('active'))].classList.remove('active');
    listOfPropertiesMobile[actProperty].classList.add('active');
    changePersonPropertiesMobile();
    changePersonPropertiesDesktop();

}

let autoChangeCodeMobile = setInterval(automaticChangeMobile,20000);
let autoChangeCodeDesktop = setInterval(automaticChangeDesktop,20000);

for (const property of listOfPropertiesMobile) {
    property.addEventListener("click",(e)=>{
        clearInterval(autoChangeCodeMobile);
        listOfPropertiesMobile[listOfPropertiesMobile.findIndex(item => item.classList.contains('active'))].classList.remove('active');
        e.target.classList.add('active');
        changePersonPropertiesMobile();
        // changePersonPropertiesDesktop();
        autoChangeCodeMobile=setInterval(automaticChangeMobile,20000);
    });
}
for (const property of listOfPropertiesDesktop) {
    property.addEventListener("click",(e)=>{
        clearInterval(autoChangeCodeDesktop);
        listOfPropertiesDesktop[listOfPropertiesDesktop.findIndex(item => item.classList.contains('active'))].classList.remove('active');
        e.target.classList.add('active');
        // changePersonPropertiesMobile();
        changePersonPropertiesDesktop();
        autoChangeCodeDesktop=setInterval(automaticChangeDesktop,20000);
    });
}

function changeProperty(e)
{
    if(e.keyCode == "39")
    {
        clearInterval(autoChangeCodeDesktop);
        let propertyPosition = listOfPropertiesDesktop.findIndex(item => item.classList.contains('active'));
        listOfPropertiesDesktop[propertyPosition].classList.remove('active');
        propertyPosition++;
        if(propertyPosition==listOfPropertiesDesktop.length)
        {
                propertyPosition=0;
        }
        listOfPropertiesDesktop[propertyPosition].classList.add('active');
        changePersonPropertiesMobile();
        changePersonPropertiesDesktop();
        autoChangeCodeDesktop=setInterval(automaticChangeDesktop,20000);

    }
    else if(e.keyCode == "37")
    {
        clearInterval(autoChangeCodeDesktop);
        let propertyPosition = listOfPropertiesDesktop.findIndex(item => item.classList.contains('active'));
        listOfPropertiesDesktop[propertyPosition].classList.remove('active');
        propertyPosition--;
        if(propertyPosition==-1)
        {
            propertyPosition=listOfPropertiesDesktop.length-1;
        }
        listOfPropertiesDesktop[propertyPosition].classList.add('active');
        changePersonPropertiesMobile();
        changePersonPropertiesDesktop();
        autoChangeCodeDesktop=setInterval(automaticChangeDesktop,20000);

    }
}


document.addEventListener('keydown',changeProperty);

initialSettingsMobile();
initialSettingsDesktop();