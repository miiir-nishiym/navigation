const open = document.querySelector('#btn-open');
const close = document.querySelector('#btn-close');
const menu = document.querySelector('#menu');
const items = document.querySelectorAll('.item');

const menuOpen = () => {
    //console.log('hello');
    const Keyframes = {
        visibility: ['hidden','visible'],
        opacity: [0,1]
    }
    const options = {
        duration: 600,
        easing: 'ease',
        fill: 'forwards',
    }
    menu.animate(Keyframes,options);

    //項目を表示するアニメーション
    items.forEach((item,index) => {
        item.animate({opacity:[0,1]},{
            duration: 600,
            easing: 'ease',
            fill: 'forwards',
            delay: index*200,
        });
    });
}
open.addEventListener('click',menuOpen);


const menuClose = () => {
    const Keyframes = {
        visibility: ['visible','hidden'],
        opacity: [1,0]
    }
    const options = {
        duration: 600,
        easing: 'ease',
        fill: 'forwards',
    }
    menu.animate(Keyframes,options);

    items.forEach((item) => {
        item.animate({opacity:[1,0]},{
            duration: 600,
            easing: 'ease',
            fill: 'forwards',
        });
    });
}
close.addEventListener('click',menuClose);

