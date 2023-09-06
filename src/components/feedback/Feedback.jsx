import React, { Component } from 'react';
import css from './Feedback.module.css'
import {Controls} from './Controls';
import { Value } from './Value';
export class Counter extends Component {
    static defaultProps = {
        initialValue: 0,
    }

    static propsTypes = {

    }
    state = {
        value: this.props.initialValue,
        // value: 5,
    }

    //     constructor() {
    //         super();
    //         this.state = {
    //             value: 2,
    //         };

    // }
    handleIncrement = () => {
        // this.setState({value: 22})
        this.setState(prevState => ({
            value: prevState.value + 1,
            }));
    // this.setState(prevState => {
    //     return {
    //         value: prevState.value + 1,
    //     };

    // })
    // this.setState(prevState => {
    //     return {
    //         value: prevState.value + 1,
    //     };

    // })
    // console.log('😀')
    // console.log(this)
}
handleDecrement = () => {
    this.setState(prevState => {
        return {
            value: prevState.value - 1,
        };
    })
    // console.log('😭')
    // console.log(this)
}
render() {
    return (
        <div className={css.Counter}>
            <Value
            value={this.state.value}
            />
            {/* <span className={css.Counter__value}>{this.state.value}</span> */}
            <Controls
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
            />
            {/* <div className={css.Counter__controls}>
                <button type="button"
                    onClick={(this.handleIncrement)}
                >😃 + 1</button>
                <button type="button"
                    onClick={(this.handleDecrement)}
                >😭 - 1</button>
            </div> */}
        </div>
    )
}
}