import { createStore } from "redux";
import { GeneralReducer } from "./reducer";

const store = createStore(GeneralReducer)
export default store;