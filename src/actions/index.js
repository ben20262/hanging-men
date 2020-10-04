export const addWords = wordHash => {
    let words = wordHash.words.toUpperCase().split(', ')
    let hints = wordHash.hints.split(', ')
    let number = Number(wordHash.number) > 26 ? 26 : Number(wordHash.number)
    return dispatch => {
        dispatch({
            type: 'ADD_WORDS',
            words,
            number,
            hints
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