//objectives of chess REWORK:
/*
1. Disengage chessboard from walls of canvas
    > be able to render stuff 


*/



let numberOfTilesPerRow = 8;
let numberOfTilesPerCollumn = 8;
//BASIC ASSUMPTION: All tiles are squares and therefor have the same width and height! 

let tileSize = 25;

let chessBoardWidth = tileSize*numberOfTilesPerRow;
let chessBoardHeight = tileSize*numberOfTilesPerCollumn;

// let canvasWidth = 300;
// let canvasHeight = 300;
let canvasWidth = 100+chessBoardWidth;
let canvasHeight = 100+chessBoardHeight;

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
    drawChessBoard();
}

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
            fill(255);
            rect(tileX, tileY, tileSize, tileSize)
        }
    }
}