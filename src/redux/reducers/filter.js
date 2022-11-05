import {SHOW_ALL, SHOW_COMPLATE} from "../actions";

const initialState = 'ALL';

export function filterReducer(previousState = initialState, action) {
  if(action.type === SHOW_COMPLATE) {
    return "COMPLATE"
  }

  if(action.type === SHOW_ALL) {
    return "ALL"
  }
  return previousState;
}