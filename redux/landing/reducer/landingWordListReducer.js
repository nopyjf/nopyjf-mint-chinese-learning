import { LANDING_WORD_LIST_ADD_WORD } from "../actions/landingWordListActions"

const landingWordListReducer = (state = [], action) => {
  switch (action.type) {
    case LANDING_WORD_LIST_ADD_WORD:
      return state.concat([action.word])
    default: 
      return state
  }
}

export default landingWordListReducer