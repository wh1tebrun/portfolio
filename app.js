let line1 = document.querySelector('.line-about');
let line2 = document.querySelector('.line-skills');
let line3 = document.querySelector('.line-education');
let line4 = document.querySelector('.line-projects');
let line5 = document.querySelector('.line-contact');
let line6 = document.querySelector('.line-in-game-content')


window.onscroll = () => { 
    let pos = window.scrollY;
    console.log(pos);
    line6.style.right = `${pos - 150}px`
    line1.style.right = `${pos - 150}px`
    line2.style.right = `${pos - 1150}px`
    line3.style.right = `${pos - 3050}px`
    line4.style.right = `${pos - 4250}px`
    line5.style.right = `${pos - 5650}px`
}