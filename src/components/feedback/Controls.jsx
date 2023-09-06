import React from 'react'

import css from './Feedback.module.css'

export const Controls = ({ onIncrement, onDecrement }) =>
    <div className={css.Counter__controls}>
        <button type="button"
            onClick={(onIncrement)}
        >😃 + 1</button>
        <button type="button"
            onClick={(onDecrement)}
        >😭 - 1</button>
    </div>;

