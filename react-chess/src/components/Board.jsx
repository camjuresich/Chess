import Space from './Space' // assign an id to every position and a key(reuse the id)

export default function Board({boardState}) {
    console.log(boardState)
    const spaces = Object.keys(boardState).map((position, i) => {

        return <Space color='black'>{boardState[position]}</Space>
        /*create the space with an the associated chess space as the id. 
          the position should also inclue the piece(if there's one) that 
          sits in the position(can be listed as the child). 

        */
    })
    return (
        <div className="board--container">
           <h1>hello from board container</h1> 
           {spaces}
        </div>
    )
}