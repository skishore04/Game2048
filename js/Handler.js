class Handler extends Game{
    constructor(props){
        super(props)
        this.board = Board.getBoard()
    }
    keyInput(input) {
        switch (input) {
            case 37: // left
            case 72: // H -- vim binding left
                return this.moveLeft()
            case 38: // up
            case 74: // J -- vim binding up
                return this.moveUp()
            case 39: // right
            case 76: // L -- vim binding right
                return this.moveRight()
            case 40: // down
            case 75: // K -- vim binding down
                return this.moveDown()
            default:
                return
        }
    }
    moveLeft(){
        this.board.map((column, row) => { 
            for (let i = 1; i < column.length; i++){
                if (this.board[row][i]){
                    while (i > 0 && Tile.hasEmpty(row, i, 0, -1)){
                        this.board[row][i-1] = this.board[row][i]
                        Tile.clear(row, i)
                        i--
                    } 
                    if (Tile.hasSameValue(row, i, 0, -1)){
                        this.board[row][i-1] += this.board[row][i]
                        Tile.clear(row, i)
                    }
                }
            }
        })
    }

    moveUp(){
        this.board.map((row, column) => { 
            for (let i = 1; i < row.length; i++){
                if (this.board[i][column]){
                    while (i > 0 && Tile.hasEmpty(i, column, -1, 0)){
                        this.board[i-1][column] = this.board[i][column]
                        Tile.clear(i, column)
                        i--
                    } 
                    if (i > 0 && Tile.hasSameValue(i, column, -1, 0)){
                        this.board[i-1][column] += this.board[i][column]
                        Tile.clear(i, column)
                    }
                }
            }
        })
    }
    moveRight(){
        this.board.map((column, row) => { 
            for (let i = column.length -1; i >= 0; i--){
                if (this.board[row][i]){
                    while (i < column.length -1 && Tile.hasEmpty(row, i,0, 1)){
                        this.board[row][i+1] = this.board[row][i]
                        Tile.clear(row, i)
                        i++
                    } 
                    if (Tile.hasSameValue(row, i,0, 1)){
                        this.board[row][i+1] += this.board[row][i]
                        Tile.clear(row, i)
                    }
                }
            }
        })
    }
    moveDown(){
        for (let x = this.board.length -1; x >=0; x--){
            let column = x
            for (let i = this.board[0].length -1; i >= 0; i--){
                if (this.board[i][column]){
                    while (i < this.board[0].length -1 && Tile.hasEmpty(i, column, 1, 0)){
                        this.board[i+1][column] = this.board[i][column]
                        Tile.clear(i, column)
                        i++
                    } 
                    if (i < this.board[0].length -1 && Tile.hasSameValue(i, column, 1, 0)){
                        this.board[i+1][column] += this.board[i][column]
                        Tile.clear(i, column)
                    }
                }
            }
        } 
    }
}