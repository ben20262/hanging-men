export default function hangingReducer(state = {words: [], number: 26}, action) {
    switch(action.type) {
        case 'ADD_WORDS':
            let wordHash = action.words.map((word, index) => {
                return {
                    word,
                    hint: action.hints[index]
                }
            })
            return {
                ...state,
                words: wordHash,
                number: action.number
            }
        case 'LETTER_CLICK':
            return {
                state
            }
        default:
            return state
    }
}