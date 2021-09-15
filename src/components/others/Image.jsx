import React from 'react'

const Image = (props) => {
  return (
    <img
      alt={`Car${props.model}`}
      src={props.image}
      className={props.class}
      onClick={props.onClick}
    />
  )
}
export default Image
