// Create a loop that draws the board.
// the board will be drawn of many different divs 
// I believe css grid would be good to use in this case 
// https://dev.to/hira_zaira/create-a-chessboard-using-css-grid-3iil
// 
const drawBoard = function(){
    const board = document.getElementById("board")
    const aToH = "abcdefgh"
    const oneToEight = "87654321"
    
    for (let i = 0; i < 8; i++) {
        let row = oneToEight[i];
        let w = "white"
        let b = "black"
        if(i % 2 === 1) {
            w = "black"
            b = "white"
        }
        for (let j = 0; j < 8; j++) {
            col = aToH[j];
            const space = document.createElement("div")
            board.appendChild(space)
            if (j % 2 === 0) {
                space.classList.add(w)
            } else {
                space.classList.add(b)
            }
            space.id = `${col}${row}`
            space.classList.add("space")
        }
    }

}
drawBoard();