const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId),
    nav =document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventlistener('click',()=>{
            nav.classList.toggle('show');
        });
    }

};
showMenu('nav__toggle','nav__menu');

const navLink = document.querySelectorAll('nav__link'),
  navMenu = document.getElementById('nav__menu')
function linkAction() {
    navMenu.classList.remove('show');
    
}
nav__link.forEach(n =>n.addEventlistener('click',linkAction))


//scroll section
const sections = document.querySelectorAll('section[id]')
window.addEventlistener('scroll');

function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop=current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('nav__menu a[href*='+sectionId +']').classList.add('active')
        }
    })
}