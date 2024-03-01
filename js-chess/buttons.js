let flipButton = document.getElementById("flip-board");
flipButton.addEventListener("click", function () {
    perspectiveWhite = !perspectiveWhite;
});

let generateBoardFromFenButton = document.getElementById("generate-board-from-FEN");
let inputFEN = document.getElementById("input-FEN");

generateBoardFromFenButton.addEventListener("click", function () {

    console.log("CREATING BOARD FROM FEN!");
    //check if is VALID FEN before firing?
    chessBoard.createBoardFromFEN(inputFEN.value);

});

let backButton = document.getElementById("back");
let forwardButton = document.getElementById("forward");

backButton.addEventListener("click", function () {
    console.log("undo");

    if (chessBoard.chronoIndex != 0)
    {
        chessBoard.chronoIndex--;
        chessBoard.createBoardFromFEN(chessBoard.arrFENTimeline[chessBoard.chronoIndex]);
    }
});
forwardButton.addEventListener("click", function () {
    console.log("redo");

    if (chessBoard.chronoIndex != chessBoard.arrFENTimeline.length-1)
    {
        chessBoard.chronoIndex++;
        chessBoard.createBoardFromFEN(chessBoard.arrFENTimeline[chessBoard.chronoIndex]);
    }
});
