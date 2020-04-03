import React, { Component } from 'react'
import H1 from './h1'
import H2 from "./h2";
import H3 from "./h3";


class LiftingState extends Component {
    constructor(props) {
       super(props) 

       this.state ={
           clicks : 0
       }


    }

    reset = () => {
      this.setState({
          clicks:0
      })
    }

    add= () => {
       this.setState({
         clicks: this.state.clicks + 1
       });
    }
    
    
  render() {
    return (
      <>
        <H1 clicks={this.state.clicks} />
        <br></br>
        <H2 reset={this.reset}  />
        <br></br>

        <H3 add={this.add} />
      </>
    );
  }
}

export default LiftingState
