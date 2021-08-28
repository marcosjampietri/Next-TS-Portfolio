import { actionCreator } from "../../types/states";

export const navAction: actionCreator<any> =
    () => async (dispatch, getState) => {
        dispatch({
            type: "TOGGLE_NAV",
        });
    };