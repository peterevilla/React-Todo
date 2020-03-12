// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import TodoForm from "./TodoForm";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <TodoForm />
      </div>
    );
  }
}

export default TodoList;
