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

// document.querySelector('.fa-envelope').addEventListener('click', myFunction );
