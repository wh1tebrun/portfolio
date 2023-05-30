
let line6 = document.querySelector('.line-in-game-content')


window.onscroll = () => { 
    let pos = window.scrollY;
    console.log(pos);
    line6.style.right = `${pos - 1600}px`
}