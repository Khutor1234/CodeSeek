window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');
    overlay = document.querySelector('.menu_overlay');
    services = document.querySelector('.services');
    btn = document.getElementById("myBtn");
    sections = document.querySelectorAll('section');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        overlay.classList.toggle('menu_overlay_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            overlay.classList.toggle('menu_overlay_active');
        })
    });

    window.addEventListener('scroll', function() {
        let y = window.scrollY;
        if(y > 100){
            btn.style.display = "block";
            btn.classList.add('animate__bounceInLeft');
        } else {
            btn.style.display = "none";   
        }
    });
    
    btn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    });
   
})