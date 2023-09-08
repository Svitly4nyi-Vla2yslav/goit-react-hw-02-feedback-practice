import React, { Component } from 'react'
// import { Dropdown } from './Dropdown/Dropdown';
// import {Counter} from './feedback/Feedback'
import { TodoList } from './TodoList/TodoList';
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
    todos: [
      {id: 'id-1', text: 'Вивчити основи React', completed: false},
      {id: 'id-2', text: 'Розібратись с React Router', completed: false},
      {id: 'id-3', text: 'Пережити Redux', completed: false},

    ],
  }
  render() {
    const {todos} = this.state;
    return (
      <div
      >
        {/* <Dropdown /> */}
        {/* <Counter initialValue={ 0} /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <TodoList todos={todos}/>
      </div>
    );
  }
}

