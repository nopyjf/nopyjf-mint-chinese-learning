import { GAME_WORD_LIST_CREATE_DATA, GAME_WORD_LIST_REMOVE_WORD } from "../actions/gameWordListActions";

const gameWordListReducer = (state = { showWord: "", data: [] }, action) => {
  switch (action.type) {
    case GAME_WORD_LIST_CREATE_DATA: {
      let ls = [...action.data]
      return ls.sort(() => Math.random() - 0.5)
    }
    case GAME_WORD_LIST_REMOVE_WORD: {
      return [
        ...state.filter((word) => {
          return word.id !== action.id
        })
      ]
    }
    default: {
      return state
    }
  }
}

export default gameWordListReducer