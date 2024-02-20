class ChesspieceVector 
{

    constructor (rowCoord, colCoord, pieceString)
    {
        this.col = colCoord;
        this.row = rowCoord;
        this.icon = pieceString;
    }
    // console.log("Initializing ChesspieceVector!");

    getIcon()
    {
        return this.icon;
    }

    getColumn ()
    {
        return this.col;
    }

    getRow ()
    {
        return this.row;
    }
}