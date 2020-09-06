import React from 'react'
import Game from './Game'

const Games = props => {

    return (
        <div className='Games-Component'>
            {props.words}
        </div>
    )
}

export default Games
