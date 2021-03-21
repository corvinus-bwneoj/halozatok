function elso() {
    for (var i = 0; i < 10; i++) {
        var div = document.createElement("div");
        div.innerText = i;
        div.style.background = `rgb(${255 - i * 20}, ${255 - i * 20}, ${255-i*20})`

        document.getElementById("szamok").appendChild(div);

    }
}
function faktorialis(n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}
function masodik() {
    for (var sor = 0; sor < 10; sor++) {
        var soros = document.createElement("div");
        
        soros.classList.add("sor");
        document.getElementById("pascal").appendChild(soros);

        for (var oszlop = 0; oszlop < sor + 1; oszlop++) {
            var elem = document.createElement("div");
            elem.classList.add("elem");
            elem.innerText = faktorialis(sor)/(faktorialis(oszlop)*faktorialis(sor-oszlop));
            soros.appendChild(elem);





        }


    }






}
