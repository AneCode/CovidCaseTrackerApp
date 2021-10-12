import React, { Component } from 'react'
import {Card,Text} from 'react-bootstrap'
export default class MyCard extends Component {
    constructor(props){
       super(props);
    }
    render() {
        return (
            <div class="mycard" id={this.props.bg}>
                <span>{this.props.h1} </span>
                <span id="m">{this.props.h2}</span>            
                <h1>{this.props.h3}</h1>
            </div>
        )
    }
}
