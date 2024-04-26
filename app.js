// Create a loop that draws the board.
// the board will be drawn of many different divs 
// I believe css grid would be good to use in this case 
// https://dev.to/hira_zaira/create-a-chessboard-using-css-grid-3iil
// 
const drawBoard = function() {
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
            // let piece = space.appendChild(document.createElement("img"))
            // piece.setAttribute("src", "svgs/bishop-svgrepo-com.svg")
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
/* ////////////////////////////////// */
// PLACE THE GAME PIECES ON THE BOARD 
/* ////////////////////////////////// */
const setUpGame = function() {

    
    // CREATE SEPARATE FUNCTIOSNS TO PLACE THE PIECES ON THE BOARD
    // PAWNS
    const setPiece = function(positions, source) {
        // positions is an array
        // type is the class that the image will be attached to
        // source is the image source
        for (let i = 0; i < positions.length; i++) {
            const currentPosition = positions[i];
            const currentElement = document.createElement('img')
            currentElement.src = source
            // console.log(currentElement)
            if (currentPosition.includes('1') || currentPosition.includes('2')) {
                currentElement.classList.add('whitePiece')
            } else {
                currentElement.classList.add('blackPiece')

            }
            document.getElementById(currentPosition).appendChild(currentElement)
            
        }
    }
    const pawns = [
        'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7', 'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'];
    const rooks = ['a8', 'h8', 'a1', 'h1'];
    const knights = ['b8', 'g8', 'b1', 'g1'];
    const bishops = ['c8', 'f8', 'c1', 'f1'];
    const kings = ['e8', 'e1'];
    const queens = ['d8', 'd1'];
    setPiece(knights, 'svgs/knight-svgrepo-com.svg')
    setPiece(pawns,'svgs/pawn-svgrepo-com.svg')
    setPiece(rooks, 'svgs/rook-svgrepo-com.svg')
    setPiece(bishops, 'svgs/bishop-svgrepo-com.svg')
    setPiece(kings, 'svgs/king-svgrepo-com.svg')
    setPiece(queens, 'svgs/queen-svgrepo-com.svg')
}
const movePiece = function () {
    // if an svg is on a space allow that piece to be clicked.
    // when piece is clicked allow piece to move anywhere there is not a piece
    const aToH = "abcdefgh"
    const oneToEight = "87654321"
    for (let i = 0; i < aToH.length; i++) {
        let letter = aToH[i];
        for (let j = 0; j < oneToEight.length; j++) {
            let number = oneToEight[j];
            let currentSpace = `${letter}${number}`
            let node = document.getElementById(currentSpace)
            if (node.querySelector('img')) {
                node.onclick = function() {
                    console.log('space is occupied')
                }
            } else {
                node.onclick = function() {
                    console.log('space is not occupied')
                }
            }
        } 
    }

    
}
/*
Your king can not have moved- 
Once your king moves, you can no longer castle, even if you move the king back to the starting square. 
Many strategies involve forcing the opponent’s king to move just for this reason. 

Your rook can not have moved- 
If you move your rook, you can’t castle on that side anymore.
 Both the king and the rook you are castling with can’t have moved. 

Your king can NOT be in check- 
Though castling often looks like an appealing escape, you can’t castle while you are in check!
Once you are out of check, then you can castle. Unlike moving, being checked does not remove the ability to castle later. 

Your king can not pass through check- 
If any square the king moves over or moves onto would put you in check, 
you can’t castle. You’ll have to get rid of that pesky attacking piece first!

No pieces can be between the king and rook- 
All the spaces between the king and rook must be empty. 
This is part of why it’s so important to get your pieces out into the game as soon as possible! 
*/
drawBoard();
setUpGame();
movePiece();
