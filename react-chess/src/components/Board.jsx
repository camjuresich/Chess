import Space from './Space' // assign an id to every position and a key(reuse the id)
import {useContext} from 'react'
import Piece from './Piece'

export default function Board({boardState}) {
    let color = 'white'
    const spaces = Object.keys(boardState).map((position, i) => {
        const determineColor = (index, prevColor) => {
            if (index === 0) return 'white'
            if (index === 1) return 'black'
            if ((index +1) % 8 === 1) return prevColor
            else return prevColor === 'white' ? 'black' : 'white'
            /*
               if the index is 1 return black
               if the index % 8 returns 1 return the previousColor
               else return the opposite of the the previous color

            */
            
        }
        color = determineColor(i, color)
        return (
        <Space key={position} id={position} color={color} handleClick={(e) => console.log(e.target)} >
            {boardState[position] && 
            <Piece key={i} id={position}>{boardState[position]}</Piece>
            }
        </Space>
        )
        /*create the space with an the associated chess space as the id. 
          the position should also inclue the piece(if there's one) that 
          sits in the position(can be listed as the child). 

        */
    })
    return (
        <div className="board--container">
           {spaces}
        </div>
    )
}