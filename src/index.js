import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from './redux/store';
import {addTodo, complateTodo, showAll} from "./redux/actions";
import ReduxContext from "./contexts/ReduxContext";

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });
//
// store.dispatch(addTodo("할일"))
// store.dispatch(complateTodo(0))
// store.dispatch(showAll())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
