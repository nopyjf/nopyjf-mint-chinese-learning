import { GAME_WORD_LIST_CREATE_DATA, GAME_WORD_LIST_REMOVE_WORD } from "../actions/gameWordListActions";

const gameWordListReducer = (state = { words: [], choices: [] }, action) => {
  switch (action.type) {
    case GAME_WORD_LIST_CREATE_DATA: {
      return {
        words: [...action.data].sort(() => Math.random() - 0.5),
        choices: [...action.data]
      }
    }
    case GAME_WORD_LIST_REMOVE_WORD: {
      return {
        words: [
          ...state.words.filter((word) => {
            return word.id != action.id
          })
        ],
        choices: state.choices
      }
    }
    default: {
      return state
    }
  }
}

export default gameWordListReducer