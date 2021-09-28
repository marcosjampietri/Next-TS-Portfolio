import { combineReducers } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { navReducer } from "./navReducer";
import { modReducer } from "./modReducer";
// import { loadReducer } from "./loadReducer";
import { filterReducer } from "./filterReducer";
import { toastReducer } from "./toastReducer";
import { casesReducer } from "./casesReducer";


const rootReducer = combineReducers({
    nav: navReducer,
    mod: modReducer,
    // load: loadReducer,
    filt: filterReducer,
    toast: toastReducer,
    cases: casesReducer,

});

export type AppState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export default rootReducer;