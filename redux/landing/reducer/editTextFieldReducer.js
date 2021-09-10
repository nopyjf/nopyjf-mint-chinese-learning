import { EDIT_TEXT_FIELD_CLEAR_WORD, EDIT_TEXT_FIELD_UPDATE_WORD } from "../actions/editTextFieldActions"

const editTextFieldReducer = (state = { id: 0, chinese: "", translate: "" }, action) => {
  switch (action.type) {
    case EDIT_TEXT_FIELD_UPDATE_WORD:
      return { chinese: action.chinese, translate: action.translate }
    case EDIT_TEXT_FIELD_CLEAR_WORD:
      return { chinese: "", translate: "" }
    default:
      return state
  }
}

export default editTextFieldReducer