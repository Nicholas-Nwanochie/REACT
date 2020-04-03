import React, { Component } from 'react'

class h2 extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.reset} >Reset</button>
      </>
    )
  }
}

export default h2
