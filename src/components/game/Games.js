import React from 'react'
import Game from './Game'

const Games = props => {

    return (
        <div className='Games-Component'>
            {props.words.map(word => <Game key={word.word} word={word} number={props.number} />)}
        </div>
    )
}

export default Games
