import React from 'react'

import css from './Feedback.module.css'


export const Value = ({ value }) =>
    <span className={css.Counter__value}>{value}</span>;
