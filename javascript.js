const audio = new Audio("./cat-meow-14536.mp3");

const moans = [new Audio("./moan1.mp3"),new Audio("./moan2.mp3")]
var powers = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 5000, 20000, 100000, 1000000, 100000000]

var pickaxe = 0;
var sword = 0;

var score = 0;
// const buttons = document.querySelectorAll("button");
var bokajimage = document.getElementById("bokajimg");

var pickaxeimg = document.getElementById("pickaxe");

console.log("JS running");

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         console.log("Hwy hew6");
//         audio.play();
//     });
// });

function setpickaxe(index, cost){
    var pickaxeimg = document.getElementById("pickaxe");
    if (pickaxe < index && score >= cost) {
        pickaxe = index;
        score -= cost + 1;
        moan()
        if (index == 1){
            pickaxeimg.src = "FOWTNAITPIKAX.jpg"
        }
        else if (index == 2){
            pickaxeimg.src = "pikaxstel.png"
        }
        else if (index == 3){
            pickaxeimg.src = "kinda cool pikax.webp"
        }
        else if (index == 4){
            pickaxeimg.src = "minecraft ender pikax.jpg"
        }
        else if (index == 5){
            pickaxeimg.src = "borgir.jpg"
        }
    }
}
function setsword(index, cost){
    if (sword < index && score >= cost) {
        sword = index;
        score -= cost + 1;
        moan()
    }
}



function moan(){
    var scorecounter = document.getElementById("counter");
    score += powers[pickaxe];
    scorecounter.innerText = "Stønne score: " + String(score);
    let num = Math.ceil(Math.random()+0.5);
    var newmoan = moans[num-1]
    // moans[num-1].play();
    newmoan.play()
    var compliments = document.getElementById("compliment");
    if (score > 500000) {
        compliments.innerText = "https://psykologeridanmark.dk";
    }
    if (score > 100000) {
        compliments.innerText = "Du er en liderlig gud.";
    }
    else if (score > 50000) {
        compliments.innerText = "50000 er mere end 49999";
    }
    else if (score > 25000) {
        compliments.innerText = "Bokaj er stolt.";
    }
    else if (score > 5000) {
        compliments.innerText = "Du er ved at blive god til det her.";
    }
    else if (score > 2500) {
        compliments.innerText = "Intet andet end en begynder.";
    }
    else if (score > 100) {
        compliments.innerText = "Intet andet end en begynder.";
    }
}
