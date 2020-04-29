import React from 'react'
import Square from './Square'

const style = {
    border : '4px solid darkblue',
    borderRadius : '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display : 'grid',
    grid : 'repeat(3,1fr)/repeat(3,1fr)'    
}

const Board = function({squares , onClick}){
 return   (<div style= {style} >
     {squares.map( function ( square, i ){
         return(
             <Square key = {1} value = {square} onClick = { () => onClick(i)}/>
         )
     }

    )}

 </div>)
}

export default Board