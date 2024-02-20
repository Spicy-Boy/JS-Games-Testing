//initialize size and shape of board
let length = 8;
let columnHeight = 8;
let tileSize;

//vvv object with array containing the tile data as strings
let chessBoard = new Chessboard(length, columnHeight);

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
    tileSize = width/columnHeight; //ASSUMES SQUARE!!!

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
        for (let j = 0; j < columnHeight; j++)
        {
            //vvv x and y coordinates of current tile            
            rectX = j*tileSize;
            rectY = i*tileSize;

            //this method contains a simple algorithm for setting the checkerboard colors based on the 2D array iteration
            //simply sets the fill() to one color or other
            createCheckerboardPattern(i,j);

            //highlight tile that you are hovering over
            if (isMouseOverTile(rectX, rectY, tileSize, tileSize))
            {
                //highlight lime green
                fill(148, 239, 148);
            }

            //draw the tile square
            //color is determined in createCheckerboardPattern
            rect(rectX, rectY, tileSize, tileSize);


            //if mouse is hovering over tile, highlight tile black!
            //UNUSED!
            // if (isMouseOverTile(rectX, rectY, tileSize, tileSize))
            // {
            //     //highlight black
            //     // fill(0);
            //     drawTileSelecterOutline(rectX, rectY, tileSize, tileSize);
            // }

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
                // textSize(tileSize/2);
                // text(i+" "+j, rectX, rectY, tileSize);
            }

            
        }
    }
}

function createCheckerboardPattern(i, j)
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
            fill(255);
        }
        else
        {
            fill(255, 179, 249);  
        }
    }
    else 
    {
        //white
        fill (255);
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

//UNUSED! and UNFINISHED
function drawTileSelecterOutline (rx, ry, rLength, rHeight)
{
    //DRAW selector rectangles in the corner of the tile
    fill(0);

    let selectorThickness = 2;
    let topRightCornerX = rx+rLength;
    let bottomLeftCornerY = ry+rHeight;
    let bottomRightCornerX = rx+rLength;
    let bottomRightCornerY = ry+rHeight;


    rect(rx, ry, rLength*.33, selectorThickness);
    rect(rx, ry, selectorThickness, rHeight*.33);
    
    rect(topRightCornerX, ry, -rLength*.33, selectorThickness);
    rect(topRightCornerX, ry, -selectorThickness, rHeight*.33);
}

//if holdingToggle is true, begin holding
let holdingToggle = false;
let pieceInHand = "X";
// let preHoldChessBoard = [...chessBoard];
//TESTER vvv
// console.log(preHoldChessBoard);
let preMovePiece = new ChesspieceVector(-1, -1, "X");

function drawPieceInHand () 
{

    if (mouseIsPressed && isMouseOverCanvas())
    {
        // vvv the piece grabbing code! vvv
        if (!holdingToggle)
        {
            holdingToggle = true; //prevents the initial grab happening more than once per left mouse click

            //preMovePiece saves the old position of grabbed piece
            preMovePiece = getPieceAtMouseAsVector();;

            //pieceInHand represents the currently grabbed piece
            pieceInHand = getPieceAtMouse();

            //the board is changed to reflect the picking up of the selected piece
            chessBoard[getRowIndexAtMouse()][getColumnIndexAtMouse()] = "X";          
        }
    }
    //if mouse let go over board, drop piece at position of mouse
    //overwrites existing piece
    else if (isMouseOverCanvas() && pieceInHand != "X") 
    {
        holdingToggle = false;

        chessBoard[getRowIndexAtMouse()][getColumnIndexAtMouse()] = pieceInHand;

        pieceInHand = "X";
    }
    //if mouse moves off board and let go, snaps piece back to where it was before being grabbed
    //memory of old piece is stored in preMovePiece as a ChesspieceVector object!
    else if (holdingToggle)
    {
        holdingToggle = false;

        let oldRow = preMovePiece.getRow();
        // console.log(oldRow);
        let oldCol = preMovePiece.getColumn();
        // console.log(oldCol);
        let oldIcon = preMovePiece.getIcon();
        // console.log(oldIcon);

        chessBoard[oldCol][oldRow] = oldIcon;

        pieceInHand = "X";
        //DO NOT draw if X is in hand

        // chessBoard = [...preHoldChessBoard];
    }

    if (pieceInHand != "X")
    {
        //draw symbol in hand if it is not X
        textSize(tileSize+10);
        text(pieceInHand, mouseX, mouseY+10); //+10 that aligns the piece better
    }
}

//returns true if mouse x and y is within bounds of P5 canvas!
function isMouseOverCanvas()
{
    if (mouseX >= 0 && mouseY >= 0 && 
        mouseX < width && mouseY < height)
    {
        return true;
    }

    //TESTER vvv
    // console.log("Mouse detection over canvas failed!");
    // console.log(mouseX, mouseY);
    // console.log(width, height);
    return false;
}

function getPieceAtMouse ()
{
    let columnIndex = getColumnIndexAtMouse();
    let rowIndex = getRowIndexAtMouse();

    let icon = chessBoard[rowIndex][columnIndex];

    //TESTER vvv
    // console.log("Piece at coords = "+icon);
    // console.log("row: "+rowIndex);
    // console.log("column: "+columnIndex);

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

//this function returns a ChesspieceVector object that contains the x, y, and symbol data of a piece
//the chess board itself does not store piece objects to save memory and time, but these vector objects are useful for storing information about pieces in flux!
function getPieceAtMouseAsVector()
{
    let icon = getPieceAtMouse();
    let x = getColumnIndexAtMouse();
    let y = getRowIndexAtMouse();

    return new ChesspieceVector(x, y, icon);
}