class Game {
    constructor(){
        this.size = 4
    }
    startGame(){ 
        for (let i=0;i<2;i++){
            const tile =  Tile.get()
            Tile.set(tile.x, tile.y)
        }
        this.drawUpdate()
    }

    drawUpdate(){
        this.board = Board.getBoard()
        let score = 0

        this.board.map((column, row) => {
            column.map((tile, col) =>{
                tile = document.getElementById(row + '-' + col)
                tile.innerText = this.board[row][col]
                tile.value = parseInt(tile.innerText) || null
                if (!tile.value) {
                    tile.className = "grid-tile"
                } else if (tile.value <= 2048) {
                    tile.className = "grid-tile tile-"+tile.value
                } else {
                    tile.className = "grid-tile tile-max"
                }
                score += this.board[row][col]
                document.getElementById("score")
                    .innerText = score
            })
        })
    }
}