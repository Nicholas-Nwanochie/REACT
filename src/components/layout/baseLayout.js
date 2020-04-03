import React from 'react'
import Header from './header'
import Footer from './footer'
const baseLayout = (props) => {
  return (
    <>
      <Header/>
<br></br>
{props.children}

<br></br>
      <Footer/>
    </>
  )
}

export default baseLayout
