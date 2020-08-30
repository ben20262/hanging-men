import React from 'react'

const Letter = props => {
    return (
        <button onClick={props.handleClick(props.letter)}>
            {props.letter}
        </button>
    )
}

export default Letter