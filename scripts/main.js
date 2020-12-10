const navSlide = () => {
    const burger_menu = document.querySelector('.mobile-burger-menu');
    const nav = document.querySelector('.menu-links');
    const navLinks = document.querySelectorAll('.menu-links li');
   
    burger_menu.addEventListener('click',() => {
        //Toggle nav
        nav.classList.toggle('nav-active');

         //animate links (will slightly come in)
        navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
        }
    }); 
    //Burger_menu animation
    burger_menu.classList.toggle('link_animation');
});
    
}

navSlide();