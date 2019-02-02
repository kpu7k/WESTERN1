(function () {

    'use strict';
    let couruselItem1 = document.querySelector('.courusel-item-1');
    let couruselItem2 = document.querySelector('.courusel-item-2');
    let couruselItem3 = document.querySelector('.courusel-item-3');

    setInterval(function () {



        setTimeout(function () {
            couruselItem1.classList.toggle("courusel-item-1");
            couruselItem1.classList.toggle("courusel-itemNone1");
            couruselItem2.classList.toggle("courusel-item-2");
            couruselItem2.classList.toggle("courusel-itemNone2");
        }, 6000);
        setTimeout(function () {
            couruselItem2.classList.toggle("courusel-itemNone2-3");
            couruselItem2.classList.toggle("courusel-itemNone2");
            couruselItem3.classList.toggle("courusel-item-3");
            couruselItem3.classList.toggle("courusel-itemNone3");
        }, 12000);
        setTimeout(function () {
            couruselItem1.classList.toggle("courusel-itemNone1");
            couruselItem1.classList.toggle("courusel-itemNone1-3");
            couruselItem3.classList.toggle("courusel-itemNone3-3");
            couruselItem3.classList.toggle("courusel-itemNone3");
        }, 18000);
        setTimeout(function () {
            couruselItem1.classList.toggle("courusel-item-1");
            couruselItem1.classList.toggle("courusel-itemNone1-3");
            couruselItem2.classList.toggle("courusel-itemNone2-3");
            couruselItem2.classList.toggle("courusel-item-2");

            couruselItem3.classList.toggle("courusel-itemNone3-3");
            couruselItem3.classList.toggle("courusel-item-3");
        }, 20000);

    }, 20000);

    // wait(4000);
    // couruselItem2.classList.toggle(".courusel-itemNone");
    // couruselItem3.classList.toggle(".courusel-itemNone");


}());