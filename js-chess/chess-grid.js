
function initializeBoard (height, length)
{
    let chessBoard = [];

    let boardLength = length;
    let boardHeight = height;

    for (let i = 0; i < boardHeight; i++)
    {

        //generates a fresh row
        const row = [];

        //populates the row accordng to length
        for (let j = 0; j < boardLength; j++)
        {
            row.push("X");
        }

        //fills each column with the filled out row
        chessBoard.push(row);

    }

    return chessBoard;
}

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

// let chessBoard = initializeBoard();

// console.log(chessBoard);