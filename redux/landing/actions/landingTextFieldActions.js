export const LANDING_TEXT_FIELD_UPDATE_WORD = "LANDING_TEXT_FIELD_UPDATE_WORD"
export const LANDING_TEXT_FIELD_CLEAR_WORD = "LANDING_TEXT_FIELD_CLEAR_WORD"

export const landingTextFieldUpdateWord = (word) => ({
    type: LANDING_TEXT_FIELD_UPDATE_WORD,
    word
});

export const landingTextFieldClearWord = () => ({
    type: LANDING_TEXT_FIELD_CLEAR_WORD,
    word: ""
})