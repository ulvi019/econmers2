import React from 'react'

const Helmet = (props) => {
     document.title="SilverStore-"+props.title
  return (
    <>
    {props.children}
    </>
  )
}

export default Helmet