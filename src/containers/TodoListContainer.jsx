import {connect, useSelector} from "react-redux";
import TodoList from "../components/TodoList";

// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos,
//   }
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//
//   }
// };
//
// const todoListContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList);

function TodoListContainer() {
  const todos = useSelector((state) => state.todos)
  return <TodoList todos={todos}/>
}

export default TodoListContainer;