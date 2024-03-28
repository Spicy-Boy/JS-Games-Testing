function setup () { //ONLY RUNS ONCE AT PAGE LOAD

    var canvas = createCanvas(500, 500);

    canvas.parent('game-canvas');
}

let protagonist = "☃";

function draw () {
    drawProtagonist();
}

function drawProtagonist()
{
    textSize(25);
    //text ("string", coordinateX, coordinateY);
    text(protagonist, 250, 250);
}