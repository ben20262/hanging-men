import React from 'react';
import Letter from './Letter'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
// adds more disabled for some reason
const Letters = props => {
    return (
        <div className='Letters'>
            {letters.map(letter => <Letter key={letter} letter={letter} handleClick={props.handleClick} letterArray={props.letterArray} />)}
        </div>
    );
}

export default Letters;