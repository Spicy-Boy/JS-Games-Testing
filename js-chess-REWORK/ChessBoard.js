class ChessBoard 
{
    constructor (rows, columns)
    {
        this.arr = [];
        this.arrTimelineFEN = [];
        
        this.rows = rows;
        this.columns = columns;

        this.initialFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

        this.arrTimelineFEN.push(this.initialFEN);
        this.currentChronoIndex = 0; //the board's position within arrTimelineFEN
    }

    createBoardFromFEN (stringFEN)
    {
        let FENtoParse = stringFEN;
        //TESTERS vvv FEN!!!
        // console.log(stringFEN);
        // let FENtoParse = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

        this.arr = [];

        let emptyFENSpan = 0;

        // vv tracks where in the FEN string we are during iteration, needed for empty spans
        let indexOfFENTraversal = 0;

        //convert FEN symbols from string to unicode chess piece icons inside a 2D array of the board (this.arr)
        for (let i = 0; i < this.columns; i++)
        {
            //generates a fresh row
            let row = [];
            //populates the row accordng to length
            for (let j = 0; j < this.rows; j++)
            {
                //TESTER vvv
                // console.log("Created piece @ "+i+" "+j+"!!!");
    
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
                    //TESTER vvv empty cell
                    // console.log("EMPTY!");
    
                    if (FENtoParse[indexOfFENTraversal] == "0")
                    {
                        indexOfFENTraversal++;
                    }
                }
                else{
                    row.push("X");
                    indexOfFENTraversal++;
                }
    
            }
    
            //fills each column with the filled out row
            this.arr.push(row);
            //TESTER vvv
            // console.log("Pushed an entire row!!");
    
        }
    
        console.log(this.arr);
    }
}