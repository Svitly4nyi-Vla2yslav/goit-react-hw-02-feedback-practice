import React, { Component } from 'react'
import './ColorPicker.css'


export class ColorPicker extends Component {
    state = {
        activeOptionsIdx: 0,
    };

    render() {
        return (
            <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Picker</h2>
                <div>
                    {this.props.options.map(({ label, color }, index) => {
                        const optionenClasses = ['ColorPicker__option'];
                        if (index === this.state.activeOptionsIdx) {
                            optionenClasses.push('ColorPicker__option--active');
                        }
                        return (
                            <button
                                key={label}
                                className={optionenClasses.join(' ')}
                                style={{ backgroundColor: color }}
                            ></button>
                        );
                    })}
                </div>
            </div>
        );
    }
}
