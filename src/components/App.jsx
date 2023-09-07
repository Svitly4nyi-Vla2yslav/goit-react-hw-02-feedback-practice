// import React, { Component } from 'react'
// import { Dropdown } from './Dropdown/Dropdown';
// import {Counter} from './feedback/Feedback'
import { ColorPicker } from './ColorPicker/ColorPicker';

export const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
]
export const App = () => {
  return (
    <div

    >
      {/* <Dropdown /> */}
      {/* <Counter initialValue={ 0} /> */}
      <ColorPicker options={colorPickerOptions} />
    </div>
  );
};
