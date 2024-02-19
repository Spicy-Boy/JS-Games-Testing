//initialize size and shape of board
let length = 8;
let height = 8;
let tileSize;

//vvv object with array containing the tile data as strings
let chessBoard = new Chessboard(length, height);

//TESTER vvv
// console.log(chessBoard);

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
    tileSize = width/height; //ASSUMES SQUARE!!!

    // background(255, 0, 200);
}

function draw() 
{
    drawChessBoard();

    drawPieceInHand();

    // background(255, 0, 200);
    // if (mouseIsPressed) {
    //   fill(0);
    //   ellipse(mouseX, mouseY, 80, 80);
    // } 
    // else {
    //   fill(255);
    // }

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


    for (let i = 0; i < length; i++)
    {
        for (let j = 0; j < height; j++)
        {
            //vvv x and y coordinates of current tile            
            rectX = j*tileSize;
            rectY = i*tileSize;

            //if mouse is hovering over tile, highlight tile black!
            if (isMouseOverTile(rectX, rectY, tileSize, tileSize))
            {
                //highlight 
                fill(0);
            }
            else 
            {
                fill (255);
            }
            //draw the tile square
            rect(rectX, rectY, tileSize, tileSize);

            //draw the pieces associated with the current tile coordinate
            fill(235, 52, 52);
            textSize(tileSize+10);
            textAlign(CENTER);
            // vertAlign(CENTER);

            //DRAW PIECES
            //X means empty tile, draw nothing!
            if (chessBoard[i][j] == "X")
            {
                // text("", rectX, rectY, tileSize); //, tileSize, tileSize);
            }
            else 
            {
                text(chessBoard[i][j], rectX, rectY, tileSize); //, tileSize, tileSize);

                //DEBUG prints coords of each tile on the tile
                textSize(tileSize/2);
                text(i+" "+j, rectX, rectY, tileSize);
            }

            
        }
    }
}

//rx is rectangle x coord, ry = rectangle y coord, rw = width, rh = height
//checks to see if mouse is hovering over the tile coordinates specified in parameters
function isMouseOverTile (rx, ry, rw, rh)
{
    if (mouseX > rx && mouseX < rx+rw && mouseY > ry && mouseY < ry+rh)
    {
        return true;
    }
    return false;
}

//if holdingToggle is true, begin holding
let holdingToggle = false;
let pieceInHand = "X";
let preHoldChessBoard = [...chessBoard];
//TESTER vvv
console.log(preHoldChessBoard);

function drawPieceInHand () 
{


    //the piece grabbing code! vvv
    if (mouseIsPressed && mouseX >= 0 && mouseY >= 0)
    // && mouseX < width && mouseY < height

    {
        //TESTER vvv mouse coords
        // console.log("Mouse X: "+mouseX);
        // console.log("Mouse Y: "+mouseY);

        if (!holdingToggle)
        {
            holdingToggle = true;

            pieceInHand = getPieceAtMouse();

            // preHoldChessBoard = [...chessBoard];

            // chessBoard[getColumnIndexAtMouse()][getRowIndexAtMouse()] = "X";
        }
    }
    else if (mouseX >= 0 && mouseY >= 0) 
    {
        holdingToggle = false;
        pieceInHand = "X";

        //on let go, drop piece at mouse
        // chessBoard[getColumnIndexAtMouse()][getRowIndexAtMouse()] = pieceInHand;
    }
    else
    {
        holdingToggle = false;
        pieceInHand = "X";

        // chessBoard = [...preHoldChessBoard];
    }

    if (pieceInHand != "X")
    {
        textSize(tileSize+10);
        text(pieceInHand, mouseX, mouseY+10);
    }
}

function getPieceAtMouse ()
{
    let columnIndex = getColumnIndexAtMouse();
    let rowIndex = getRowIndexAtMouse();

    let icon = chessBoard[rowIndex][columnIndex];

    //TESTER vvv
    console.log("Piece at coords = "+icon);
    console.log("row: "+rowIndex);
    console.log("column: "+columnIndex);

    return icon;
}
function getColumnIndexAtMouse ()
{
    return Math.floor(mouseX / tileSize);
}
function getRowIndexAtMouse ()
{
    return Math.floor(mouseY / tileSize);
}