let flipButton = document.getElementById("flip-board");
flipButton.addEventListener("click", function () {
    perspectiveWhite = !perspectiveWhite;
    chessBoard.arr.reverse();
});

let generateBoardFromFenButton = document.getElementById("generate-board-from-FEN");
let inputFEN = document.getElementById("input-FEN");

generateBoardFromFenButton.addEventListener("click", function () {

    // console.log("hi");
    //check if is VALID FEN before firing?
    chessBoard.createBoardFromFEN(inputFEN.value);

}
);
