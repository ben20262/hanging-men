const hangingReducer = (state = {words: []}, action) => {
    switch(action.type) {
        case 'ADD_WORDS':
            return {
                words: action.words
            }
        default:
            return state
    }
}