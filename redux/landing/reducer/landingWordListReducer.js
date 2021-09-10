import { LANDING_WORD_LIST_ADD_WORD, LANDING_WORD_LIST_REMOVE_WORD } from "../actions/landingWordListActions"

const landingWordListReducer = (state = { id: 0, data: [] }, action) => {
  switch (action.type) {
    case LANDING_WORD_LIST_ADD_WORD: {
      return {
        id: state.id + 1,
        data: [
          ...state.data,
          {
            id: state.id,
            chinese: action.chinese,
            translate: action.translate
          }
        ]
      }
    }
    case LANDING_WORD_LIST_REMOVE_WORD: {
      return {
        id: state.id,
        data: [
          ...state.data.filter((word) => {
            return word.id !== action.id
          })
        ]
      }
    }
    default: {
      return state
    }
  }
}

export default landingWordListReducer