// Create a loop that draws the board.
// the board will be drawn of many different divs 
// I believe css grid would be good to use in this case
const drawBoard = function(){
    const board = document.getElementById("board")
    
    
    for (let i = 0; i < 8; i++) {
        let w = "white"
        let b = "black"
        if(i % 2 === 1) {
            w = "black"
            b = "white"
        }
        for (let i = 0; i < 8; i++) {
            const space = document.createElement("div")
            board.appendChild(space)
            if (i % 2 === 0) {
                space.classList.add(w)
            } else {
                space.classList.add(b)
            }
            space.classList.add("space")
        }
    }

}
drawBoard();