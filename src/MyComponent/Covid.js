import React, { Component } from 'react'
import Cardf from './Cardf';

export default class Covid extends Component {
    constructor(props){
        super(props);
        this.state={
           val:{} 
        }
    }
     async fun() {
        try{ 
        const res=await fetch("https://data.covid19india.org/data.json");
            var data=await res.json();
            console.log(data.statewise[0])
            this.setState({val:data.statewise[0]})
        }
        catch(err){
            console.log(err);
        }

    }
    componentDidMount(){
        this.fun();
    }
     render() {
         console.log('h',this.state.val)
        return (
            <div>
                  <h1>🔴LIVE </h1>
                  <h1>  COVID-19 Tracker APP</h1>
                  <Cardf data={this.state.val}></Cardf>
            </div>
        )
    }
}
