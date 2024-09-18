const selectedPiece = {
    isHolding: false,
    selectedNode: null
}

const movePiece = (e) => {
    let parent = e.target.tagName === 'IMG' ? e.target.parentNode : e.target
    let prevParent = selectedPiece.selectedNode !== null ? selectedPiece.selectedNode.parentNode : null 
    if (selectedPiece.isHolding /*&& isValidMovement(selectedPiece.selectedNode)**/) {// when a piece is to be relocated
        if (parent.children.length > 0) {
            parent.removeChild(parent.firstChild)
        }
        if (selectedPiece.selectedNode.parentNode !== parent) {
            parent.appendChild(selectedPiece.selectedNode)
            console.log(prevParent)
            prevParent.classList.remove('selected')
        }    
        selectedPiece.isHolding = false
        selectedPiece.selectedNode = null
        // console.log(selectedPiece.selectedNode.parentNode)
    }
    else if (parent.children.length > 0) {// a piece exists and is being selected as the selected node
        parent.classList.add('selected')
        selectedPiece.selectedNode = parent.children[0]
        selectedPiece.isHolding = true
    } else {// when the user selects a space without a piece in it.
        console.log('please select a piece')
    }
}

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
            if (j % 2 === 0) {
                space.classList.add(w)
            } else {
                space.classList.add(b)
            }
            space.id = `${col}${row}`
            space.classList.add("space")
            space.addEventListener('click', (e) => movePiece(e))
        }
    }
}

/* ////////////////////////////////// */
// PLACE THE GAME PIECES ON THE BOARD 
/* ////////////////////////////////// */
const setUpGame = function() {
    // CREATE SEPARATE FUNCTIOSNS TO PLACE THE PIECES ON THE BOARD
    // PAWNS
    const setPiece = function(positions, source, type) {
        // positions is an array
        // type is the class that the image will be attached to
        // source is the image source
        for (let i = 0; i < positions.length; i++) {
            const currentPosition = positions[i];
            const currentElement = document.createElement('img')
            currentElement.src = source
            // console.log(currentElement)
            if (currentPosition.includes('1') || currentPosition.includes('2')) {
                currentElement.classList.add('whitePiece', type)
            } else {
                currentElement.classList.add('blackPiece', type)
            }
            document.getElementById(currentPosition).appendChild(currentElement)
        }
    }

    const pawns = [
        'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7',
        'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'];
    const rooks = ['a8', 'h8', 'a1', 'h1'];
    const knights = ['b8', 'g8', 'b1', 'g1'];
    const bishops = ['c8', 'f8', 'c1', 'f1'];
    const kings = ['e8', 'e1'];
    const queens = ['d8', 'd1'];
    setPiece(knights, 'svgs/knight-svgrepo-com.svg', 'knight')
    setPiece(pawns,'svgs/pawn-svgrepo-com.svg', 'pawn')
    setPiece(rooks, 'svgs/rook-svgrepo-com.svg', 'rook')
    setPiece(bishops, 'svgs/bishop-svgrepo-com.svg', 'bishop')
    setPiece(kings, 'svgs/king-svgrepo-com.svg', 'king')
    setPiece(queens, 'svgs/queen-svgrepo-com.svg', 'queen')
}


const resetBtn = document.getElementById('game-reset-btn')
resetBtn.addEventListener('click', () => {
    const board = document.getElementById('board') 
    board.innerHTML = ''
    drawBoard()
    setUpGame()
})
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