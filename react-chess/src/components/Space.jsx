import { useContext } from "react"
import { BoardContext } from "../App"
export default function Space({color, children, handleClick, id}) {
    const {setBoardState, activePiece, setActivePiece} = useContext(BoardContext)
    function moveSelectedPiece(targetLocation) {

        if (activePiece) {
            setBoardState(prevBoard => {
                return {
                    ...prevBoard,
                    [targetLocation]: activePiece[1],
                    [activePiece[0]]: ''
                }
            })
            setActivePiece('')
        }
        // if there is a selected piece
        // and the space does not already have a piece in it(can fix this later)
        // update the board state to move the piece to this location on the board

    }
    return (
        <div id={id} onClick={() => moveSelectedPiece(id)} className={`space ${color}`}>{children}</div>
    )
}