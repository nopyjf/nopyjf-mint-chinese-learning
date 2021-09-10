export const EDIT_TEXT_FIELD_UPDATE_WORD = "EDIT_TEXT_FIELD_UPDATE_WORD"
export const EDIT_TEXT_FIELD_CLEAR_WORD = "EDIT_TEXT_FIELD_CLEAR_WORD"

export const editTextFieldUpdateWord = (chinese, translate) => ({
    type: EDIT_TEXT_FIELD_UPDATE_WORD,
    chinese,
    translate
});

export const editTextFieldClearWord = () => ({
    type: EDIT_TEXT_FIELD_CLEAR_WORD
});