const audio = new Audio("./cat-meow-14536.mp3");

const megabuy = document.getElementById("megabuy");
const megacounter = document.getElementById("megacounter");
const moans = [new Audio("./moan1.mp3"),new Audio("./moan2.mp3"),new Audio("./moan3.mp3"),new Audio("./moan4.mp3"),new Audio("./moan5.mp3"),new Audio("./moan6.mp3")];
var powers = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 5000, 20000, 100000, 1000000, 100000000];
const megamoans = [new Audio("./megamoan1.mp3"),new Audio("./megamoan2.mp3"),new Audio("./megamoan3.mp3"),new Audio("./megamoan4.mp3"),new Audio("./megamoan5.mp3"),new Audio("./megamoan6.mp3")];


var pickaxe = 0;
var sword = 0;

var score = 0;
var mega = 0;

var bokajimage = document.getElementById("bokajimg");

var pickaxeimg = document.getElementById("pickaxe");

console.log("JS running");



function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
function updateScore() {
    let score_ = getCookie("score");
    if (score_ != "") {
        score = parseInt(score_);

    } else {
        setCookie("score", "0", 3650);
        score = 0;

    }
    let mega_ = getCookie("mega");
    if (mega_ != "") {
        mega = parseInt(mega_);

    } else {
        setCookie("mega", "0", 3650);
        mega = 0;

    }
    console.log("Pickaxe at start", getCookie("pickaxe"))
    let pickaxe_ = getCookie("pickaxe");
    if (pickaxe_ != "") {
        setpickaxe(parseInt(pickaxe_), 0);
        console.log("Got pickaxe from cookie");
    } else {
        setCookie("pickaxe", "0", 3650);
        setpickaxe(0, 0);
        console.log("Created new cookie cuz im new or code bad");

    }
    console.log("After cookies, pickaxe (cookie): ", getCookie("pickaxe"), " Var pickaxe: ", pickaxe);

    var scorecounter = document.getElementById("counter");
    scorecounter.innerText = "Stønne score: " + String(score);

    setCookie("score", String(score), 3650);

  } 

  function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}


function setpickaxe(index, cost){
    var pickaxeimg = document.getElementById("pickaxe");
    if (pickaxe < index && score >= cost) {
        pickaxe = index;
        score -= cost + 1;
        setCookie("score", score, 3650)
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
        else if (index == 6){
            pickaxeimg.src = "LOOK MOM I MADE IMG.jpg"
        }
        else if (index == 7){
            pickaxeimg.src = "Windows-XP.jpg"
        }
        else if (index == 8){
            pickaxeimg.src = "warcrime-er 6000.jpg"
        }
        else if (index == 9){
            pickaxeimg.src = "Gold pikax.jpg"
        }
        else if (index == 10){
            pickaxeimg.src = "axe.png"
        }
        else if (index == 11){
            pickaxeimg.src = "cave drawings.jpg"
        }
        else if (index == 12){
            pickaxeimg.src = "nerd.jpg"
        }
    }
    setCookie("pickaxe", String(pickaxe), 3650);
}
function setsword(index, cost){
    if (sword < index && score >= cost) {
        sword = index;
        score -= cost + 1;
        moan()
    }
}

function buymegamoan(){
    if (getCookie("score") > 1000000000) {
        mega += 1;
        setCookie("mega", mega, 3650);
        updateScore();
        score -= 1000000000;
        setCookie("score", score, 3650);
        for (let i = 0; i < 6; i++){
            megamoans[i].play();
        }
        megacounter.innerText = "MegaMoans: " + String(mega) + "  ";
    }
}

function moan(){

    var scorecounter = document.getElementById("counter");
    score += powers[pickaxe];
    scorecounter.innerText = "Stønne score: " + String(score);
    mega += 1;
    setCookie("mega", String(mega), 3650);
    setCookie("score", String(score), 3650);
    console.log(score, "            ", getCookie("score"));

    let num = Math.ceil(Math.random()*6)
    var newmoan = moans[num-1]

    function onstart() {
        document.onkeydown = function(event) {};
    }

    newmoan.play()
    var compliments = document.getElementById("compliment");
    if (score > 10000000) {
        compliments.innerText = "Du gjorde det fandme. Jeg har ondt af dig.";
    }
    else if (score > 5000000) {
        compliments.innerText = "https://psykologeridanmark.dk";
    }
    else if (score > 1000000) {
        compliments.innerText = "Du deltager nu i bandeskyderier om Cookie clicker VS Bokaj Simulator";
    }
    else if (score > 500000) {
        compliments.innerText = "Du har spillet Bokaj Simulator så lang tid at du har glemt hvordan man læser";
    }
    else if (score > 100000) {
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
