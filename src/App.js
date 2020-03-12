import React from 'react';
import data from './data'
import TodoList from './components/TodoList';
import TodoForm from "./components/TodoForm";
import "./components/Todo.css"

class App extends React.Component {
  constructor() {
    super();
    this.state = {

      data: data

    };

    console.log(this.state.data)
  }

  addTask = task => {

    this.setState({
      data: [
        ...this.state.data,
        {
          task: task,
          id: Date.now(),
          completed: false
        }

      ]
    })
  }

  toggleCompleted = taskId => {

    this.setState({

        data: this.state.data.map(item => {
              console.log(item)
            if(item.id === taskId) {
              return(
                {
                  ...item,
                  completed: !item.completed
                }
              )
            } else {
              return item
            }
        })
    })
    
  }
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="app">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList key={this.state.data.id} data={this.state.data} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
