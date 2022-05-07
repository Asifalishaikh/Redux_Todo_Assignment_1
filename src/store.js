import { createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(rootReducer);

export default store

// note rootReducer is exported from index.js of reducer