export default function hangingReducer(state = {words: []}, action) {
    switch(action.type) {
        case 'ADD_WORDS':
            return {
                ...state,
                words: action.words
            }
        case 'LETTER_CLICK':
            return {
                state
            }
        default:
            return state
    }
}