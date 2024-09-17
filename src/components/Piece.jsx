import {useContext} from 'react'
import {BoardContext} from '../App'
import king from '../../svgs/king-svgrepo-com.svg'
import bishop from '../../svgs/bishop-svgrepo-com.svg'
import knight from '../../svgs/knight-svgrepo-com.svg'
import pawn from '../../svgs/pawn-svgrepo-com.svg'
import queen from '../../svgs/queen-svgrepo-com.svg'
import rook from '../../svgs/rook-svgrepo-com.svg'

// import butt from '../../svgs'
console.log(king)
export default function Piece({children, id}) {// children 
    const {setActivePiece, currentPlayer} = useContext(BoardContext)
    // console.log(context)
    const pieces = {
        'w-rook': rook,
        'b-rook': rook,
        'w-knight': knight,
        'b-knight': knight,
        'w-bishop': bishop,
        'b-bishop': bishop,
        'w-queen': queen,
        'b-queen': queen,
        'w-king': king,
        'b-king': king,
        'w-pawn': pawn,
        'b-pawn': pawn
    };
    const styles = {}
    if (children.slice(2) === 'pawn') styles.width = '60%'
    
     /* activePiece should only be able to be selected when the current player 
    equals the state only pieces that belong to that player are able to be selected 
    after piece is placed, and board state is updated the state should change 
    */
    function conditionallySetActivePiece() {
        if (children[0] === currentPlayer[0]) {
            if (children) {
                setActivePiece([id, children]) // 'g2', 'w-pawn'

            }
            
        }
    }
    return (
        <img style={styles} onClick={conditionallySetActivePiece} className={`piece ${children[0]}`} src={pieces[children]} />
    )
}