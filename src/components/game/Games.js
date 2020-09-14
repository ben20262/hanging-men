import React from 'react'
import Game from './Game'

const Games = props => {

    return (
        <div className='Games-Component'>
            {props.words.map(word => <Game key={word} word={word} />)}
        </div>
    )
}

export default Games
