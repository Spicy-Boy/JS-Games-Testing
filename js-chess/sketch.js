//initialize size and shape of board
let columns = 8;
let rows = 8;
let tileSize;

//vvv array containing the tile data as strings
let chessBoard = initializeBoard(columns, rows);
/* KEY:
//WHITE is lowercase letters
white pawn = p
w knight = n
w bishop = b
w queen = q
w king = k
w rook = r

//BLACK is capital letters
black pawn = P
b knight = N
b bishop = B
b queen = Q
b king = K
b rook = R
*/

function setup ()
{
    var canvas = createCanvas(250, 250);
    //places the p5 canvas inside div with id canvas-holder
    canvas.parent('canvas-holder');

    // initialize the grid squares
    //width is equal to the canvas width!
    tileSize = width/rows; //ASSUMES SQUARE!!!

    // background(255, 0, 200);
}

function draw() 
{
    // background(255, 0, 200);
    // if (mouseIsPressed) {
    //   fill(0);
    //   ellipse(mouseX, mouseY, 80, 80);
    // } 
    // else {
    //   fill(255);
    // }

    drawChessBoard();

    // if (mouseIsPressed)
    // {
    //     fill(0);
    // }
    
}

function drawChessBoard()
{

    // vvv the x and y of the individual board tiles
    let rectX;
    let rectY;

    for (let i = 0; i < columns; i++)
    {
        for (let j = 0; j < rows; j++)
        {
            //vvv x and y coordinates of current tile            
            rectX = i*tileSize;
            rectY = j*tileSize;

            //if mouse is hovering over tile, highlight tile black!
            if (isMouseTile(rectX, rectY, tileSize, tileSize))
            {
                fill(0);
            }
            else 
            {
                fill (255);
            }
            //draw the tile square
            rect(rectX, rectY, tileSize, tileSize);

            fill(235, 52, 52);
            textSize(tileSize+10);
            textAlign(CENTER);
            // vertAlign(CENTER);

            text("X", rectX, rectY, tileSize); //, tileSize, tileSize);
            
        }
    }
}

//rx is rectangle x coord, ry = rectangle y coord, rw = width, rh = height
//checks to see if mouse is hovering over the tile coordinates specified in parameters
function isMouseTile (rx, ry, rw, rh)
{
    if (mouseX > rx && mouseX < rx+rw && mouseY > ry && mouseY < ry+rh)
    {
        return true;
    }
    return false;
}