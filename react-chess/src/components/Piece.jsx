import {useContext} from 'react'
import {BoardContext} from '../App'
export default function Piece({children, id}) {
    const {setActivePiece, currentPlayer} = useContext(BoardContext)
    // console.log(context)
    const pieces = {
        'w-rook': '../../svgs/rook-svgrepo-com.svg',
        'b-rook': '../../svgs/rook-svgrepo-com.svg',
        'w-knight': '../../svgs/knight-svgrepo-com.svg',
        'b-knight': '../../svgs/knight-svgrepo-com.svg',
        'w-bishop': '../../svgs/bishop-svgrepo-com.svg',
        'b-bishop': '../../svgs/bishop-svgrepo-com.svg',
        'w-queen': '../../svgs/queen-svgrepo-com.svg',
        'b-queen': '../../svgs/queen-svgrepo-com.svg',
        'w-king': '../../svgs/king-svgrepo-com.svg',
        'b-king': '../../svgs/king-svgrepo-com.svg',
        'w-pawn': '../../svgs/pawn-svgrepo-com.svg',
        'b-pawn': '../../svgs/pawn-svgrepo-com.svg'
    };
    const styles = {}
    if (children.slice(2) === 'pawn') styles.width = '60%'
    
     /* activePiece should only be able to be selected when the current player 
    equals the state only pieces that belong to that player are able to be selected 
    after piece is placed, and board state is updated the state should change 
    */
    function conditionallySetActivePiece() {
        if (children[0] === currentPlayer[0]) {
            setActivePiece([id, children])

        }
    }
    return (
        <img style={styles} onClick={conditionallySetActivePiece} className={`piece ${children[0]}`} src={pieces[children]} />
    )
}