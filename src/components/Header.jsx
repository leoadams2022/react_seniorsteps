import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { title: 'react', desc: 'react course', counter: 0, level: 'Easy' },
                { title: 'react2', desc: 'react course2', counter: 1, level: 'Easy2' },
                { title: 'react3', desc: 'react course3', counter: 3, level: 'Easy3' }
            ]
        };
    }
    render() {
        return (
            <div className="header">
                {this.state.data.map((item, index) => (
                    <div key={index} className="section1">
                        <h3 className="title">{item.title}</h3>
                        <p className="desc">{item.desc}</p>
                        <p className="counter">{item.counter}</p>
                        <p className="level">{item.level}</p>
                    </div>
                ))}
            </div>
        )
    }
}
