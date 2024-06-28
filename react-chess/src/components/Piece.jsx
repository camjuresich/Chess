export default function Piece({children}) {

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
        <img className="piece" src={pieces[children]} />
    )
}