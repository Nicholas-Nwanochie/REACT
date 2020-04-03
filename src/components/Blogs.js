import React from 'react'

const Blogs = (props) => {
  return (
    <>
      Blog
      <br></br>
      {props.match.params.BlogID}
      <br></br>
      {props.location.pathname}
    </>
  )
}

export default Blogs
