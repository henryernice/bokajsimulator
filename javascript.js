const audio = new Audio("./cat-meow-14536.mp3");

const moans = [new Audio("./moan1.mp3"),new Audio("./moan2.mp3"),new Audio("./moan3.mp3"),new Audio("./moan4.mp3"),new Audio("./moan5.mp3"),new Audio("./moan6.mp3")]
var powers = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 5000, 20000, 100000, 1000000, 100000000]

var pickaxe = 0;
var sword = 0;

var score = 0;

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
        setCookie("score", 0, 3650);
        score = 0;

    }
    
    let pickaxe_ = getCookie("pickaxe");
    if (pickaxe_ != "") {
        setpickaxe(parseInt(pickaxe_));

    } else {
        setCookie("pickaxe", 0, 3650);
        setpickaxe(0, 0);

    }

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

// function checkCookie() {
//     let user = getCookie("username");
//     if (user != "") {
//       alert("Welcome again " + user);
//     } else {
//       user = prompt("Please enter your name:", "");
//       if (user != "" && user != null) {
//         setCookie("username", user, 365);
//       }
//     }
//   } 

function setpickaxe(index, cost){
    var pickaxeimg = document.getElementById("pickaxe");
    if (pickaxe < index && score >= cost) {
        pickaxe = index;
        setCookie("pickaxe", pickaxe, 3650);
        score -= cost + 1;
        moan()
        updateScore();
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

    setCookie("score", String(score), 3650);
    console.log(getCookie("score"));

    let num = Math.ceil(Math.random()*6)
    var newmoan = moans[num-1]

    newmoan.play()
    var compliments = document.getElementById("compliment");
    if (score > 500000) {
        compliments.innerText = "https://psykologeridanmark.dk";
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
