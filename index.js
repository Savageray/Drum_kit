var drumButtons = document.querySelectorAll(".drum");

for (var i=0; i<drumButtons.length; i++){
    drumButtons[i].addEventListener("click",function (){
        
    var buttonHtml = this.innerHTML;
    makeSound(buttonHtml);
    buttonAnimation(buttonHtml);
   
});

}

document.addEventListener("keypress",function(event){
    makeSound(event.key.toLowerCase());
    buttonAnimation(event.key.toLowerCase());
})
function makeSound(key){
     switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play(); 
            break;
        case "a":
            var crash = new Audio('sounds/crash.mp3');
            crash.play(); 
            break;
        case "s":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play(); 
            break;
        case "d":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play(); 
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play(); 
            break;
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play(); 
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play(); 
            break;
    
        default: console.log(key);
            break;
    }
}
function buttonAnimation(currentButton){
   var activeButton= document.querySelector("." +currentButton );
   activeButton.classList.add("pressed")
   setTimeout(function(){
    activeButton.classList.remove("pressed")
   },100)
}




/*var audio = new Audio('./sounds/tom-1.mp3');
    audio.play(); */