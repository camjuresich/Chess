import { useContext } from "react";
import { BoardContext } from "../App";
export default function Space({ color, children, handleClick, id }) {
    const {
        boardState,
        setBoardState,
        activePiece,
        setActivePiece,
        setCurrentPlayer,
    } = useContext(BoardContext);
    /* conditionally render a style to valid movement squares for the current selected piece
       if the current selectedPiece is ['g2', 'w-pawn'] then valid movement should be g3 or g4
       I should consider the check state of the current player to see if any movement is valid

    */
    const numbers = {
        1: "a",
        2: "b",
        3: "c",
        4: "d",
        5: "e",
        6: "f",
        7: "g",
        8: "h",
    };

    const letters = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
    };

    const styles = {};
    if (activePiece[0]) {
        function pawnMovement(piece) {
            let column = activePiece[0][0];
            let row = activePiece[0][1];
            if (piece === "w-pawn") {
                if (id === column + (Number(row) + 2) && activePiece[0][1] === '2'){// starting position let highlight two square ahead
                    styles.backgroundColor = 'green';
                }
                if (id === column + (Number(row) + 1)) {
                    // if (!boardState[])
                    if (!boardState[column + (Number(row) + 1)]) {
                        styles.backgroundColor = "green";
                        //#id29:before { content: "*";}
                    }
                }
            } else {
                if (id === column + (Number(row) - 2) && activePiece[0][1] === '7'){// starting position let highlight two square ahead
                    styles.backgroundColor = 'green'
                }
                if (id === column + (Number(row) - 1)) { // 'g4' === column + (row-1)
                    // if (!boardState[])
                    if (!boardState[column + (Number(row) - 1)]) {
                        styles.backgroundColor = "green";
                        //#id29:before { content: "*";}
                    }
                }

            }

            // pawn gotta move north or south so it gon be up to
            // pawn gotta move up or down.
        }
        if (activePiece[1] === "w-pawn" || activePiece[1] === "b-pawn") {
            pawnMovement(activePiece[1]);
        }
        // get the piece in front of the active piece highlighted
    }
    function moveSelectedPiece(targetLocation) {
        if (
            activePiece &&
            activePiece[1][0] !== boardState[targetLocation][0]
        ) {
            setBoardState((prevBoard) => {
                if (targetLocation === activePiece[0]) return { ...prevBoard };
                return {
                    ...prevBoard,
                    [targetLocation]: activePiece[1],
                    [activePiece[0]]: "",
                };
            });
            if (targetLocation !== activePiece[0]) {
                setActivePiece(""); // active piece is otherwise an array ie ['g3', 'w-pawn']
                setCurrentPlayer((prevPlayer) =>
                    prevPlayer === "white" ? "black" : "white"
                );
            }
        }
    }
    return (
        <div
            style={styles}
            id={id}
            onClick={() => moveSelectedPiece(id)}
            className={`space ${color}`}
        >
            {children}
        </div>
    );
}
