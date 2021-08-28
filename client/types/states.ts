import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

export interface navState {
    NavOn: boolean;
}

export interface loadState {
    isLoading: boolean;
}

export interface navActionTP {
    obj: { type: "TOGGLE_NAV" };
}

export interface isLodingActionTP {
    type: "LOADED";
}
export interface storeType {
    navState: navState;
    loadState: loadState;

}

export type allActions = navActionTP | isLodingActionTP;

export type actionCreator<allActions extends Action> = () => ThunkAction<
    void,
    storeType,
    {},
    allActions
>;