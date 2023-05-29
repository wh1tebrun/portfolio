let line1 = document.querySelector('.line-about');
let line2 = document.querySelector('.line-skills');
let line3 = document.querySelector('.line-education');


window.onscroll = () => { 
    let pos = window.scrollY;
    console.log(pos);
    line1.style.right = `${pos - 150}px`
    line2.style.right = `${pos - 1150}px`
    line3.style.right = `${pos - 3050}px`
}