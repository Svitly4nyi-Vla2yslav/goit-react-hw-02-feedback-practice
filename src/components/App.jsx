import React, { Component } from 'react'
// import { Dropdown } from './Dropdown/Dropdown';
// import {Counter} from './feedback/Feedback'
import { TodoList } from './TodoList/TodoList';
import initialTodos from '../Data/todos.json'
// import { ColorPicker } from './ColorPicker/ColorPicker';

// export const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ]

export class App extends Component {
  state = {
    todos: initialTodos,
  }

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }))
  }
  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodosCount = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0)
    return (
      <div
      >
        {/* <Dropdown /> */}
        {/* <Counter initialValue={ 0} /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Загальна кількість:  {totalTodoCount}</p>
          <p>Кількість виконаних:  {completedTodosCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

