import React from 'react'

const Button = (props) => {
  return (
    <button className={props.buttonClass} onClick={props.onClick} id={props.id}>
      {props.children}
    </button>
  )
}
export default Button
