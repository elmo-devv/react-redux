import {combineReducers} from "redux";
import {todosReducer} from "./todos";
import {filterReducer} from "./filter";

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
})

export default reducer;