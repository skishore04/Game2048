window.onload = () => {
    Game = new Game()
    Board = new Board()
    Tile = new Tile()
    Handler = new Handler()
    Game.startGame()
    document.onkeydown = (e) => {
        Handler.keyInput(e.keyCode)
        const newTile = Tile.get()
        Tile.set(newTile.x,newTile.y)
        Game.drawUpdate()
    }
}