import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Provider } from 'react-redux'
import { createStore } from "redux";

import Counter from "./conter"
import reducer from "./reducer";
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [count, setCount] = useState(0)



  const store = createStore(reducer)




  return (
    <div style={{ textAlign: "center", marginTop: "25%" }}>
      <Provider store={store}>
        <AddTodo />
        <TodoList />
      </Provider>
    </div>

  );
}

export default App;
