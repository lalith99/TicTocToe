import React, {useState} from 'react'
import Board from './Board'
import { calculateWinner } from '../helpers'

const styles = {
    width :'200px',
    margin : '20px'
}
const Game = function(){
const [board,setBoard] = useState(Array(9).fill(null))

const [xisNext , setXisNext] =useState(true)
const winner = calculateWinner(board)

    function handleClick(i){
const boardCopy = [...board]
if (winner || boardCopy[i]) return
boardCopy[i] = xisNext ? 'X' : 'O'
setBoard (boardCopy)
setXisNext(!xisNext)
    }

    function jumpTo() {

    }

    const renderMoves = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )

    
   return( 
       <>
   <Board squares={board} onClick = {handleClick}/>
   <div style = {styles}>
       <p>{winner ? 'Winner :' +winner : 'Next player:  ' + (xisNext ? 'X' : 'O')} </p> 
   {renderMoves()}</div>
   </>
   )
}

export default Game