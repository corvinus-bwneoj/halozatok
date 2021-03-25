var kérdések;
var sz = 0;
function letöltés() {
    fetch('/questions.json').then(r => r.json()).then(data => letöltésBefejeződött(data));

}
function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(sz);


}

function kérdésMegjelenítés(k) {
    document.getElementById("válasz1").style.background = "darkolivegreen";
    document.getElementById("válasz2").style.background = "darkolivegreen";
    document.getElementById("válasz3").style.background = "darkolivegreen";
    document.getElementById("válasz1").style.background = "darkolivegreen";
    let kerdes = document.getElementById("kérdés_szöveg")
    kerdes.innerText = kérdések[k].questionText;

    document.getElementById("válasz1").innerText = kérdések[k].answer1;
    for (var i = 1; i < 4; i++) {
        document.getElementById("válasz" + i).innerText = kérdések[k]["answer" + i];

    }
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[k].image;

}

function plusz() {
    if (sz<2) {
        sz++;
    }
    else {
        sz = 0;
    }
    kérdésMegjelenítés(sz);
}
function minusz() {
    if (sz>0) {
        sz--;
    }
    else {
        sz = 2;
    }
    kérdésMegjelenítés(sz);
}
function jovalasz1() {
    
    var valasz = kérdések[sz].correctAnswer;
    if (valasz == 1) {
        document.getElementById("válasz1").style.background = "green";


    }
    else {
        document.getElementById("válasz1").style.background = "red";
    }
}
function jovalasz2() {

    var valasz = kérdések[sz].correctAnswer;
    if (valasz == 2) {
        document.getElementById("válasz2").style.background = "green";


    }
    else {
        document.getElementById("válasz2").style.background = "red";
    }
}
function jovalasz3() {

    var valasz = kérdések[sz].correctAnswer;
    if (valasz == 3) {
        document.getElementById("válasz3").style.background = "green";


    }
    else {
        document.getElementById("válasz3").style.background = "red";
    }
}