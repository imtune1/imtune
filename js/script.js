/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navber = document.querySelector('.navber');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navber.classList.toggle('active');
}



/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top  = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });


    /*==================== sticky navbar ====================*/

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    
    menuIcon.classList.remove('bx-x');
    navber.classList.remove('active');


};





/*==================== scroll reveal ====================*/
ScrollReveal({ 
    /*reset: true,*/
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });





/*==================== typed js ====================*/
const typed = new Typed('.multiple-text',{
    strings:['Singer','Guitarist','Harmonium player'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});




/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault(); // ফর্ম সাবমিট থামানো

    emailjs.sendForm('service_zwn6xng', 'template_lgqf2d9', '#contact-form', 'hT_LYiv88jjMSWVCb')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully ✅';

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            contactForm.reset();
        })
        .catch((error) => {
            contactMessage.textContent = 'Message not sent ❌';
            console.error('EmailJS error:', error);
        });
};

contactForm.addEventListener('submit', sendEmail);