import React, { Component } from 'react';

export default class Title extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>Descubre lugares de manera simple</p>
            </div>
        )
    }

}