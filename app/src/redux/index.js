import {createStore} from "redux";
import commonReducer from "./common";

const store = createStore(commonReducer);

export default store;
