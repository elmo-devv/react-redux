export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLATE = 'SHOW_COMPLATE'

// {type: ADD_TODO, text: "할일"}
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

export function complateTodo(index) {
  return {
    type: COMPLETE_TODO,
    index
  }
}

export function showAll() {
  return { type: SHOW_ALL }
}

export function showComplate() {
  return { type: SHOW_COMPLATE }
}