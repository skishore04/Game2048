class Tile extends Board{
    constructor (props) {
        super(props)
        this.tileValue = 2
        this.board = Board.getBoard()
    }

    isValid(x,y) { return !this.board[x][y] }

    random(){
        let tile = {
            x:Math.floor(Math.random()* (Game.size)),
            y:Math.floor(Math.random()* (Game.size))
        } 
        return tile
    }
    get(){
        let tile = this.random()
        if (this.isValid(tile.x, tile.y)) {
            return tile
        } else {
            return this.get()
        }
    }
    set(x,y){
        if (!this.board[x][y]){
            this.board[x][y] = this.tileValue
        }
    }
    clear(x,y){ this.board[x][y] = null }

    hasEmpty(row,col, toCheckRow, toCheckColumn){
        return  !(this.board[row + toCheckRow][col + toCheckColumn])
    }
    hasSameValue(row, col, toCheckRow, toCheckColumn){
        return (this.board[row][col] === this.board[row + toCheckRow][col + toCheckColumn])
    }
}