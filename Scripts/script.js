var imgJordan1 = document.getElementById("imagen-jordan1");
imgJordan1.onclick = function() {
    var imgJordan1Src = imgJordan1.getAttribute("src");
    if (imgJordan1Src === "https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg") {
        imgJordan1.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScrA_QHvFjD5m48CDq_GNbH1aVgIb73vH5nWExxueeJiojbUQVwTuUZH-Tjh3btd1UaQA&usqp=CAU");
        imgJordan1.setAttribute("width", "300px");
    } else {
        imgJordan1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg");
    };
};

var enterButton = document.getElementById("enter-button");
var onButtonClicker1 = function() {
    var name = document.getElementById("name").value;
    var mensaje = document.getElementById("mensaje");
    mensaje2 = document.getElementById("mensaje2");
    var texto1;
    var texto2;
    texto1 = "Tú: Michael, " + name + " o tú, ¿quién hace el tiro para ganar?";
    texto2 = "Michael Jordan: ¿Qué? Esa es una pregunta tonta. Lo tiro yo. No hay otra opción.";
    mensaje.textContent = texto1;
    mensaje2.textContent = texto2;
};
enterButton.addEventListener("click", onButtonClicker1);

var logoJordanEl = document.getElementById("logo-jordan");
var startTime = new Date().getTime();
var walkTheLogoJordan = function() {
        var currTime = new Date().getTime();
        var secondsElapsed = ((currTime - startTime)/1000);
        var newLeft = secondsElapsed * 200;
        logoJordanEl.style.left = newLeft + "px";
        window.requestAnimationFrame(walkTheLogoJordan);
};
walkTheLogoJordan();
