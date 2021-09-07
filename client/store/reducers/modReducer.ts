import { modState } from "../../types/states";

const initState = {
    ModOn: false,
    modComponent: null,
};
export const modReducer = (state: modState = initState, action: any) => {
    switch (action.type) {
        case "TOGGLE_MOD_VIDEO":
            return {
                ...state,
                ModOn: true,
                modComponent: action.payload,
            };
        case "TOGGLE_MOD_PIC":
            return {
                ...state,
                ModOn: true,
                modComponent: action.payload,
            };
        case "TOGGLE_MOD_OFF":
            return {
                ...state,
                ModOn: false,
            };
        default:
            return {
                ...state,
            };
    }
};
