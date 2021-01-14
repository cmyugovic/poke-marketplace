import { combineReducers } from "redux";
import pokemon from "../screens/pokemon/reducer/index";

const appReducer = combineReducers({
  pokemon,
});

export default appReducer;
