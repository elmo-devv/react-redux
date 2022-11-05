import {useRef} from "react";
import useReduxDispatch from "../hooks/useReduxDispatch";
import {addTodo} from "../redux/actions";
import {connect} from "react-redux";

export default function TodoForm({ add }) {
  const inputRef = useRef();
  // const dispatch = useReduxDispatch();

  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={click}>추가</button>
    </div>
  )
  function click() {
    add(inputRef.current.value)
  }
}
