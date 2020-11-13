import { combineReducers } from "redux";
import grocery from "./groceryReducer";

const rootReducer = combineReducers({
  grocery
});

export default rootReducer;
