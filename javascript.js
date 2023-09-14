const audio = new Audio("./cat-meow-14536.mp3");

const moans = [new Audio("./moan1.mp3"),new Audio("./moan2.mp3")]
// const buttons = document.querySelectorAll("button");
var bokajimage = document.getElementById("bokajimg");

console.log("JS running");

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         console.log("Hwy hew6");
//         audio.play();
//     });
// });

function moan(){
    let num = Math.ceil(Math.random()+0.5);
    moans[num-1].play();
}