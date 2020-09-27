import React from 'react';
import Letter from './Letter'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
// adds more disabled for some reason
const Letters = props => {
    let startLetters = letters
    let letterNumber = props.number + props.word.length
    let letterArray = props.word
    for ( var i = props.word.length; i <= letterNumber; i ) {
        let letterIndex = Math.floor(Math.random() * startLetters.length)
        let newLetter = startLetters[letterIndex]
        if (!letterArray.includes(newLetter)) {
            letterArray.push(newLetter)
            i++
        }
        startLetters.slice(letterIndex, letterIndex + 1)
    }
    return (
        <div className='Letters'>
            {letters.map(letter => <Letter key={letter} letter={letter} handleClick={props.handleClick} letterArray={letterArray} />)}
        </div>
    );
}

export default Letters;