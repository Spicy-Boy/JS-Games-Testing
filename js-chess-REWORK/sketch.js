//objectives of chess REWORK:
/*

*/

let numberOfTilesPerRow = 8;
let numberOfTilesPerCollumn = 8;

//BASIC ASSUMPTION: vvv All tiles are squares and therefor have the same width and height! 
let tileSize;
//TODO: media query for tile size, change size according to screen (phone or not)
if (window.matchMedia("(max-width: 1000px)").matches)
{
    //mobile less than 1000px
    tileSize = 31.25;
}
else 
{
    //desktop
    // tileSize = 45;
    tileSize = 31.25;
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

let chessBoard = new ChessBoard(numberOfTilesPerRow, numberOfTilesPerCollumn)
chessBoard.createBoardFromFEN(chessBoard.initialFEN);

let perspectiveWhite = true; //if board oriented with white at bottom, perspectiveWhite = true

function setup ()
{
    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('canvas-holder');

    //tester background
    background(255, 0, 0);

    // const chessBoard = new ChessBoard();
}

function draw ()
{

    // vvv draw chess board and its pieces, mouse hovering
    drawChessBoard();

    // drawPiecesOnBoard();

    // drawPieceInHand();
}

// vvv draw chess board and its pieces, mouse hovering
function drawChessBoard()
{
    //reset stroke to black
    // noStroke();

    // vvv draw the board outline
    fill(255);
    rect(widthOriginToBoard,heightOriginToBoard,chessBoardWidth,chessBoardHeight);

    // vvv draw the checker pattern inside board
    for (let i = 0; i < numberOfTilesPerCollumn; i++ )
    {
        for (let j = 0; j < numberOfTilesPerRow; j++)
        {
    // for (let i = numberOfTilesPerCollumn-1; i >= 0; i-- )
    // {
    //     for (let j = 0; j < numberOfTilesPerRow; j++)
            let tileX = widthOriginToBoard+(i*tileSize);
            let tileY = heightOriginToBoard+(j*tileSize);

            //choose color for tile
            // fill(255);
            
            createCheckerboardPattern(i,j);

            if (isMouseOverTile(tileX, tileY)) //hightlight tile mouse is hovering
            {
                //highlight lime green
                fill(148, 239, 148);
            }

            //draw the tile square
            rect(tileX, tileY, tileSize, tileSize);

            //DEBUG prints coords of each tile on the tile
            // fill(0);
            // textSize(tileSize/2);
            // text(j+" "+i, tileX, tileY, tileSize);

            drawWhitePerspectivePiecesOnBoard(i,j);
            // //DRAW PIECES
            // fill(235, 52, 52);
            // textSize(tileSize+10);
            // textAlign(CENTER);
            // //NOTE: i indicates column position, j indicates row position
            // //as i increases, move downward, as j increases, move rightward (like WRITING)
            // if (chessBoard.arr[j][i] == "X")
            // {
            //     // text("", rectX, rectY, tileSize); //, tileSize, tileSize);
            // }
            // else 
            // {
            //     text(chessBoard.arr[j][i], tileX, tileY, tileSize); //, tileSize, tileSize);
            // }

            //Transparent border outline vvv
            // fill(0, 0, 0, 0);
            // rect(widthOriginToBoard, heightOriginToBoard, tileSize*numberOfTilesPerRow, tileSize*numberOfTilesPerCollumn);

            //single lines!

        }
    }

    stroke(  0 );
    line(widthOriginToBoard, heightOriginToBoard+tileSize*numberOfTilesPerCollumn, widthOriginToBoard+tileSize*numberOfTilesPerRow, heightOriginToBoard+tileSize*numberOfTilesPerCollumn);

    //TODO draw a white box beneath the board

}

//this loop could be melded with the "drawChessBoard" loop to save memory
//HOWEVER, until I perfect the design, we are keeping them apart!!
/* DEFUNCT AND UN OPERATIONAL RN, NOT IN USE vvvv*/
function drawPiecesOnBoard()
{
    //if white perspective, draw white pieces on bottom, black on top
    if (perspectiveWhite)
    {
        drawWhitePiecesPerspectiveOnBoard();

    }
    else 
    {
        drawWhitePiecesPerspectiveOnBoard();
    }
}
//this is in use rn vvv to draw pieces
function drawWhitePerspectivePiecesOnBoard(i,j)
{
    
        // for (let i = 0; i < numberOfTilesPerCollumn; i++ )
        // {
        //     for (let j = 0; j < numberOfTilesPerRow; j++)
        // //     {
        //     for (let i = numberOfTilesPerCollumn-1; i >= 0; i-- )
        //     {
        //         for (let j = numberOfTilesPerCollumn-1; j >= 0; j--)
        //         {
                    let tileX = widthOriginToBoard+(i*tileSize);
                    let tileY = heightOriginToBoard+(j*tileSize);
    
                    //DRAW PIECES
                    noStroke();
                    fill(235, 52, 52);
                    textSize(tileSize+10);
                    textAlign(CENTER);
                    //NOTE: i indicates column position, j indicates row position
                    //as i increases, move downward, as j increases, move rightward (like WRITING)
                    if (chessBoard.arr[j][i] == "X")
                    {
                        // text("", rectX, rectY, tileSize); //, tileSize, tileSize);
                    }
                    else 
                    {
                        text(chessBoard.arr[j][i], tileX, tileY, tileSize); //, tileSize, tileSize);
                    }

    
                    //DEBUG prints coords of each tile on the tile
                    // fill( 88, 24, 69 );
                    // textSize(tileSize/2);
                    // text(i+" "+j, tileX, tileY+15, tileSize);

                    stroke(0);
    
            //     }
            // }
}


//ty = relative tileX value, tY = relative tileY value dependent on position in board array iteration
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

//algorithm for setting up the proper checker pattern
function createCheckerboardPattern(i,j)
{
    if (perspectiveWhite)
    {
        if (i % 2 == 0)
        {
            if (j % 2 != 0)
            {
                //pink
                fill(255, 179, 249);   
            }
            else
            {
                //white
                fill(255);
            }
    
        }
        else if (i % 2 != 0)
        {
            if (j % 2 == 0)
            {
                //pink
                fill(255, 179, 249);   
            }
            else
            {
                //white
                fill(255);
            }
        }
        else 
        {
            //white
            fill (0);
        }
    }
    else
    {
        if (i % 2 == 0)
        {
            if (j % 2 != 0)
            {
                //white
                fill(255);
            }
            else
            {
                //pink
                fill(255, 179, 249);  
            }
    
        }
        else if (i % 2 != 0)
        {
            if (j % 2 == 0)
            {
                //white
                fill(255);
            }
            else
            {
                //pink
                fill(255, 179, 249);  
            }
        }
        else 
        {
            //white
            fill (255);
        }
    }

}