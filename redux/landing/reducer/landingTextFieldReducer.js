import { LANDING_TEXT_FIELD_UPDATE_WORD, LANDING_TEXT_FIELD_CLEAR_WORD } from "./../actions/landingTextFieldActions"

const landingTextFieldReducer = (state = "", action) => {
  switch (action.type) {
    case LANDING_TEXT_FIELD_UPDATE_WORD:
    case LANDING_TEXT_FIELD_CLEAR_WORD:
      return action.word
    default: 
      return state
  }
}

export default landingTextFieldReducer