import {useContext} from 'react'
import {BoardContext} from '../App'
export default function Piece({children, id}) {
    const {setActivePiece} = useContext(BoardContext)
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

    if (!pieces[children]) <p>{children}</p>
    return (
        <img onClick={() => setActivePiece([id, children])} className={`piece ${children[0]}`} src={pieces[children]} />
    )
}