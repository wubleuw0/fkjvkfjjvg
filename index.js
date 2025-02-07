let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function draw(){
    let R = 0;
    let G = 0;
    let B = 0;
    let X = 0;
    let Y = 0;
    let zoom = document.getElementById("zoom").value;

    for(let i = 0; i <= 800; i++){
        for(let j = 0; j <= 800; j++){
            X = X / zoom;
            Y = Y / zoom;

            R = Math.abs(eval(document.getElementById("rFormula").value));
            G = Math.abs(eval(document.getElementById("gFormula").value));
            B = Math.abs(eval(document.getElementById("bFormula").value));

            X = X * zoom;
            Y = Y * zoom;

            ctx.fillStyle = `rgb(${R} ${G} ${B})`;
            ctx.fillRect(X, Y, 1, 1);
            X++;
        };
        Y++;
        X = 0;
    ;}
};

document.getElementById("button").onclick = function(){
    draw();
};