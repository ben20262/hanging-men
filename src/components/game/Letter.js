import React from 'react'

const Letter = props => {

    let letterBool = (props.letterArray.includes(props.letter)) ? false : true
    let letterButton

    if (letterBool) {
        letterButton = <button onClick={event => props.handleClick(event, props.letter)} disabled={true} >
                {props.letter}
        </button> 
    } else {
        letterButton = <button onClick={event => props.handleClick(event, props.letter)} >
                {props.letter}
        </button> 
    }

    return (
        letterButton
    )
}

export default Letter