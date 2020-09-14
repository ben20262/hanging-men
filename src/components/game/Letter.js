import React from 'react'

const Letter = props => {
    return (
        <button onClick={event => props.handleClick(event, props.letter)}>
            {props.letter}
        </button>
    )
}

export default Letter