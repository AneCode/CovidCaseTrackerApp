import React, { Component } from 'react'
import MyCard from './MyCard'
import './crad.css'
import {Col,Row,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Cardf extends Component {
    constructor(props){
        super(props);
    }
    render() {

        console.log(this.props.data);
        return (
            <div>
        <Container>
          <Row id="r1">
              <Col><MyCard bg="c1" h1="OUR" h2="COUNTRY" h3="INDIA"></MyCard></Col>
              <Col><MyCard bg="c2" h1="TOTAL" h2="RECOVERY" h3={this.props.data.recovered}></MyCard></Col>
              <Col><MyCard bg="c3"  h1="TOTAL" h2="CONFIRMED" h3={this.props.data.confirmed}></MyCard></Col>
              
          </Row>
          <Row id="r2">
          <Col><MyCard bg="c4"  h1="TOTAL" h2="DEATH" h3={this.props.data.deaths}></MyCard></Col>
          <Col><MyCard bg="c5"  h1="TOTAL" h2="ACTIVE " h3={this.props.data.active}></MyCard></Col>
          <Col><MyCard bg="c6" h1="LAST" h2="UPDATE" h3={this.props.data.lastupdatedtime}></MyCard></Col>
          </Row>
         </Container>
            </div>
        )
    }
}
