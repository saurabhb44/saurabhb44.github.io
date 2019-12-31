// console.dir(document);
var home = document.body.querySelector('.home');

home.querySelector('button').addEventListener('click', runEvent);

function runEvent(e){
    
    e.preventDefault();
    
    home.style.animation = 'enter 0.5s';

    setTimeout(alertFunc , 500);
}

// function myFunction() {
//     myVar = setTimeout(alertFunc , 2000);
// }

function alertFunc() {
    home.parentNode.removeChild(home);
}
window.onload = function() {load()};

function load(){
    document.body.querySelector('#prel').style.display = 'none';
    document.body.querySelector('#load').style.display = 'contents';
}


