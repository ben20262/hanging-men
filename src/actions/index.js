export const addWords = wordString => {
    let words = wordString.split(', ')
    return dispatch => {
        dispatch({
            type: 'ADD_WORDS',
            words
        })
    }
}

export const letterClick = letter => {
    return dispatch => {
        dispatch({
            type: 'LETTER_CLICK',
            letter
        })
    }
}