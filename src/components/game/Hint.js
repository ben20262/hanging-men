import React from 'react'

const Hint = props => {
    return (
        <div className='Hint'>
            <button onClick={props.handleHintClick}>Hint</button>
            <br />
            <img src={props.url} className='hidden' alt='Hint' id='Hint' />
        </div>
    )
}

export default Hint