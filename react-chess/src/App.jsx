import { useState, createContext } from 'react'
import Board from './components/Board'

const BoardContext = createContext()
function App() {
  const [boardState, setBoardState] = useState({
    a8: 'b-rook', b8: 'b-knight', c8: 'b-bishop', d8: 'b-queen', e8: 'b-king', f8: 'b-bishop', g8: 'b-knight', h8: 'b-rook',
    a7: 'b-pawn', b7: 'b-pawn', c7: 'b-pawn', d7: 'b-pawn', e7: 'b-pawn', f7: 'b-pawn', g7: 'b-pawn', h7: 'b-pawn',
    a6: '', b6: '', c6: '', d6: '', e6: '', f6: '', g6: '', h6: '',
    a5: '', b5: '', c5: '', d5: '', e5: '', f5: '', g5: '', h5: '',
    a4: '', b4: '', c4: '', d4: '', e4: '', f4: '', g4: '', h4: '',
    a3: '', b3: '', c3: '', d3: '', e3: '', f3: '', g3: '', h3: '',
    a2: 'w-pawn', b2: 'w-pawn', c2: 'w-pawn', d2: 'w-pawn', e2: 'w-pawn', f2: 'w-pawn', g2: 'w-pawn', h2: 'w-pawn',
    a1: 'w-rook', b1: 'w-knight', c1: 'w-bishop', d1: 'w-queen', e1: 'w-king', f1: 'w-bishop', g1: 'w-knight', h1: 'w-rook'
  })

  const [currentPlayer, setCurrentPlayer] = useState('white')
  const [activePiece, setActivePiece] = useState('')
  /* state for the board should be passed to a board component
     it's probably necessary to have some kind of active piece
     included in the state. it may also be wise to have the 
     game state in there as well. I could actually separate the 
     states into different stateful variables. 
  */
  return (
    <BoardContext.Provider value={{setActivePiece, boardState, setBoardState, activePiece, currentPlayer, setCurrentPlayer}}>
      <Board boardState={boardState}/>
    </BoardContext.Provider>
  )
}


export default App
export {BoardContext}