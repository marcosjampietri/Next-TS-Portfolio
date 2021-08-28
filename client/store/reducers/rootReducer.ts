import { combineReducers } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { navReducer } from "./navReducer";
// import { modReducer } from "./modReducer";
// import { loadReducer } from "./loadReducer";
// import { filterByReducer } from "./filterReducer";


const rootReducer = combineReducers({
    nav: navReducer,
    // mod: modReducer,
    // load: loadReducer,
    // filterBy: filterByReducer,

});

export type AppState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export default rootReducer;