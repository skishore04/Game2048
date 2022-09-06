class Board extends Game{
    constructor(props){
        super(props)
        this.board = this.grid()
    }

    grid() {
        let x = []
        for (let i = 0; i < this.size; i++){
            let row = []
            for(let j=0;j < this.size; j++){
                row.push(null)
            }
            x.push(row)
        }
        return x
    }

    getBoard() { return this.board }
}