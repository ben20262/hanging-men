const addWords = wordString => {
    let words = wordString.split(', ')
    return dispatch => {
        dispatch({
            type: 'ADD_WORDS',
            words
        })
    }
}