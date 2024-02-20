
function Chessboard (length, height)
{
    //TESTER vvv
    console.log("INITIALIZING BOARD");

    let chessBoard = [];

    //generally the length and height should always be 8...
    //instead of hardcoding, I am going to leave this open to change....
    let boardLength = length;
    let boardHeight = height;



    //FEN means Forsyth-Edwards Notation
    //this is a FEN string representing the starting positions in chess!
    let initialFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
    // vv tracks where in the FEN string we are
    let indexOfFENTraversal = 0;
    // vv tracks empty portions of the FEN (represented by single numbers)
    //example; in the initial FEN, 8 represents a row of 8 empty tiles
    let emptyFENSpan = 0;

    // let FENtoParse = initialFEN;

    //TEST FEN!!!
    let FENtoParse = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

    for (let i = 0; i < boardHeight; i++)
    {
        //generates a fresh row
        let row = [];
        //populates the row accordng to length
        for (let j = 0; j < boardLength; j++)
        {
            //TESTER vvv
            console.log("Created piece @ "+i+" "+j+"!!!");

            //vvvFEN reading begins here!!!

            //SKIP slashes!! very important
            if (FENtoParse[indexOfFENTraversal] == "/")
            {
                indexOfFENTraversal++;
            }

            //WHITE
            if (FENtoParse[indexOfFENTraversal] == "r")
            {
                row.push("♖");
                indexOfFENTraversal++;
            }
            else if (FENtoParse[indexOfFENTraversal] == "n")
            {
                row.push("♘");
                indexOfFENTraversal++;
            }
            else if (FENtoParse[indexOfFENTraversal] == "b")
            {
                row.push("♗");
                indexOfFENTraversal++;
            }
            else if (FENtoParse[indexOfFENTraversal] == "q")
            {
                row.push("♕");
                indexOfFENTraversal++;
            }
            else if (FENtoParse[indexOfFENTraversal] == "k")
            {
                row.push("♔");
                indexOfFENTraversal++;
            }
            else if (FENtoParse[indexOfFENTraversal] == "p")
            {
                row.push("♙");
                indexOfFENTraversal++;
            }
            //BLACK
            else if (FENtoParse[indexOfFENTraversal] == "R")
            {
                row.push("♜");
                indexOfFENTraversal++;
            }
            else if (FENtoParse[indexOfFENTraversal] == "N")
            {
                row.push("♞");
                indexOfFENTraversal++;
            }
            else if (FENtoParse[indexOfFENTraversal] == "B")
            {
                row.push("♝");
                indexOfFENTraversal++;
            }
            else if (FENtoParse[indexOfFENTraversal] == "Q")
            {
                row.push("♛");
                indexOfFENTraversal++;
            }
            else if (FENtoParse[indexOfFENTraversal] == "K")
            {
                row.push("♚");
                indexOfFENTraversal++;
            }
            else if (FENtoParse[indexOfFENTraversal] == "P")
            {
                row.push("♟︎");
                indexOfFENTraversal++;
            }
            //isNaN stands for "Is Not a Number"
            //this section parses empty spans
            else if (!isNaN(FENtoParse[indexOfFENTraversal]))
            {
                //decrements the span number until it reaches 0, then move on!

                //BROKEN vvv because strings are immutable! Oops
                // FENtoParse[indexOfFENTraversal] = String(--FENtoParse[indexOfFENTraversal]);

                let spanValue = Number(FENtoParse[indexOfFENTraversal]);
                spanValue--;
                //since Strings are immutable, you need to make a new string with the span value updated to reflect its traversal
                FENtoParse = FENtoParse.substring(0, indexOfFENTraversal)+String(spanValue)+FENtoParse.substring(indexOfFENTraversal + 1);

                row.push("X");
                console.log("EMPTY!");

                if (FENtoParse[indexOfFENTraversal] == "0")
                {
                    indexOfFENTraversal++;
                }
            }
            else{
                row.push("X");
                indexOfFENTraversal++;
            }
            // //skip slashes entirely, that just means new row
            // else if (FENtoParse[indexOfFENTraversal] == "/")
            // {
            //     console.log("UH OH / found")
            //     indexOfFENTraversal++;
            // }

            //set initial pieces here!
            // if ()
            // row.push("X");

        }

        //fills each column with the filled out row
        chessBoard.push(row);
        //TESTER vvv
        console.log("Pushed an entire row!!");

    }

    console.log(chessBoard);
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

X = empty tile
*/

// let chessBoard = initializeBoard();

// console.log(chessBoard);