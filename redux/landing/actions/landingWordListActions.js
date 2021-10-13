export const LANDING_WORD_LIST_ADD_WORD = "LANDING_WORD_LIST_ADD_WORD"
export const LANDING_WORD_LIST_REMOVE_WORD = "LANDING_WORD_LIST_REMOVE_WORD"
export const LANDING_WORD_LIST_SET_LIST = "LANDING_WORD_LIST_SET_LIST"

export const landingWordListAddWord = (chinese, translate) => ({
    type: LANDING_WORD_LIST_ADD_WORD,
    chinese,
    translate
});

export const landingWordListRemoveWord = (id) => ({
    type: LANDING_WORD_LIST_REMOVE_WORD,
    id
});

export const landingWordListSetList = (wordList) => ({
    type: LANDING_WORD_LIST_SET_LIST,
    wordList
});
