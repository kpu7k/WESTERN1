(function () {

        'use strict';
        let navMenuContainer2 = document.querySelector('.nav-menu-off');
        let burger = document.querySelector('.btn-nav-toggle');
        let pathSvg1 = document.querySelector('.path-1-toggle');
        let pathSvg3 = document.querySelector('.path-3-toggle');

        burger.addEventListener('click', () => {
            navMenuContainer2.classList.toggle("navbar-device-width");
            pathSvg1.classList.toggle("path-1-toggle1");
            pathSvg3.classList.toggle("path-3-toggle1");
            burger.classList.toggle("btn-nav-toggle1");
        });
        
        navMenuContainer2.addEventListener('click', () => {
            burger.classList.toggle("btn-nav-toggle1");
            navMenuContainer2.classList.toggle("navbar-device-width");
            pathSvg1.classList.toggle("path-1-toggle1");
            pathSvg3.classList.toggle("path-3-toggle1");
            
        });
    
}());

