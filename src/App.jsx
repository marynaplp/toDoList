import React from "react";
import TodoList from "./tasks/components/TodoList.jsx"
import { Provider } from "react-redux"; 
import store from "./store.js"
const App = () => (
    <Provider store={store}>
        <TodoList />
    </Provider>
);

export default App;
