export const GAME_WORD_LIST_CREATE_DATA = "GAME_WORD_LIST_CREATE_DATA"
export const GAME_WORD_LIST_REMOVE_WORD = "GAME_WORD_LIST_REMOVE_WORD"

export const gameWordListCreateData = (data) => ({
    type: GAME_WORD_LIST_CREATE_DATA,
    data
});

export const gameWordListRemoveWord = (id) => ({
    type: GAME_WORD_LIST_REMOVE_WORD,
    id
});
