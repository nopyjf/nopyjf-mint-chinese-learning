
import { combineReducers } from "redux";
import editTextFieldReducer from "./landing/reducer/editTextFieldReducer";
import gameWordListReducer from "./landing/reducer/gameWordListReducer";
import landingWordListReducer from "./landing/reducer/landingWordListReducer";

const rootReducer = combineReducers({
  landingWordListReducer: landingWordListReducer,
  editTextFieldReducer: editTextFieldReducer,
  gameWordListReducer: gameWordListReducer
})

export default rootReducer