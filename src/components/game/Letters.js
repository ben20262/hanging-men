import React from 'react';
import Letter from './Letter'
 
let startLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const Letters = props => {
    return (
        <div className='Letters'>
            {startLetters.map(letter => <Letter key={letter} letter={letter} handleClick={props.handleClick} />)}
        </div>
    );
}
 
export default Letters;