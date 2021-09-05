
import { combineReducers } from "redux";
import landingTextFieldReducer from "./landing/reducer/landingTextFieldReducer";
import landingWordListReducer from "./landing/reducer/landingWordListReducer";

const rootReducer = combineReducers({
    landingWordListReducer: landingWordListReducer,
    landingTextFieldReducer: landingTextFieldReducer
})

export default rootReducer