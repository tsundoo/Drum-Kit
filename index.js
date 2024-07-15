// adding event listeners to the buttons 
let btn = document.querySelectorAll('.drum');
let btnAll = document.querySelectorAll('.drum').length;

for(let i = 0; i < btnAll; i++){

    btn[i].addEventListener('click', function(){

        makeSound(this.innerHTML)
        buttonAnimation(this.innerHTML)
    })
}

// adding event listeners to the keyboard
document.addEventListener('keypress', function(event){

   makeSound(event.key)
   buttonAnimation(event.key)
})


// creating a function the makes sounds 
function makeSound(key){

    switch(key){
        case 'w':
            let audio1 = new Audio('sounds/tom-4.mp3');
            audio1.play();
            break;
        case 'a':
            let audio2 = new Audio('sounds/tom-3.mp3');
            audio2.play();
            break;
        case 's':
            let audio3 = new Audio('sounds/snare.mp3');
            audio3.play();    
            break;
        case 'd':
            let audio4 = new Audio('sounds/crash.mp3');
            audio4.play();    
            break; 
        case 'j':
            let audio5 = new Audio('sounds/kick-bass.mp3');
            audio5.play();    
            break; 
        case 'k':
            let audio6 = new Audio('sounds/tom-2.mp3');
            audio6.play();    
            break; 
        case 'l':
            let audio7 = new Audio('sounds/tom-1.mp3');
            audio7.play();    
            break;          
    }
}


function buttonAnimation(currentKey){

    const activeBtn = document.querySelector('.' + currentKey);
    activeBtn.classList.add('pressed');

    setTimeout(function(){
        activeBtn.classList.remove('pressed')
    }, 150);
}

