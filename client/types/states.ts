import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

export interface navState {
    NavOn: boolean;
}

export interface loadState {
    isLoading: boolean;
}
export interface filterState {
    activeSkill: string;
}

export interface navActionTP {
    obj: { type: "TOGGLE_NAV" };
}

export interface isLodingActionTP {
    type: "LOADED";
}
export interface filterActionTP {
    type: "CHANGE_FILTER",
    payload: string
}
export interface storeType {
    navState: navState;
    loadState: loadState;
    filterState: filterState;

}

export type allActions = navActionTP | isLodingActionTP;

export type actionCreator<allActions extends Action> = () => ThunkAction<
    void,
    storeType,
    {},
    allActions
>;