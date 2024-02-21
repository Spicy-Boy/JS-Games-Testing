let flipButton = document.getElementById("flip-board");
flipButton.addEventListener("click", function () {
    perspectiveWhite = !perspectiveWhite;
    chessBoard.reverse();
});