//objectives of chess REWORK:
/*

*/

let numberOfTilesPerRow = 8;
let numberOfTilesPerCollumn = 8;
//BASIC ASSUMPTION: All tiles are squares and therefor have the same width and height! 

let tileSize;
//TODO: media query for tile size, change size of 
if (window.matchMedia("(max-width: 1000px)").matches)
{
    //mobile less than 1000px
    tileSize = 30;
}
else 
{
    //desktop
    tileSize = 45;
}


let chessBoardWidth = tileSize*numberOfTilesPerRow;
let chessBoardHeight = tileSize*numberOfTilesPerCollumn;

// let canvasWidth = 300;
// let canvasHeight = 300;
let canvasWidth = 20+chessBoardWidth;
let canvasHeight = 20+chessBoardHeight;

// vvv distance of chess board from origins (the left and top walls of canvas are the origins)
let widthOriginToBoard = (canvasWidth - chessBoardWidth) / 2;
let heightOriginToBoard = (canvasHeight - chessBoardHeight) / 2;

function setup ()
{
    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('canvas-holder');

    background(255, 0, 0);

    // const chessBoard = new ChessBoard();
}

function draw ()
{

    // vvv draw chess board and its pieces, mouse hovering
    drawChessBoard();

    drawPieceInHand();
}

// vvv draw chess board and its pieces, mouse hovering
function drawChessBoard()
{
    // vvv draw the board outline
    fill(255);
    rect(widthOriginToBoard,heightOriginToBoard,chessBoardWidth,chessBoardHeight);

    // vvv draw the checker pattern inside board
    for (let i = 0; i < numberOfTilesPerRow; i++ )
    {
        for (let j = 0; j < numberOfTilesPerCollumn; j++)
        {
            let tileX = widthOriginToBoard+(i*tileSize);
            let tileY = heightOriginToBoard+(j*tileSize);

            //choose color for tile
            fill(255);
            if (isMouseOverTile(tileX, tileY))
            {
                //highlight lime green
                fill(148, 239, 148);
            }

            //draw the tile square
            rect(tileX, tileY, tileSize, tileSize);
        }
    }
}

//ty = relative tileX value, tY = relative tileY value
function isMouseOverTile(tX, tY)
{
    if (mouseX > tX && mouseX < tX+tileSize && mouseY > tY && mouseY < tY+tileSize)
    {
        return true;
    }

    return false;
}

function drawPieceInHand()
{

}