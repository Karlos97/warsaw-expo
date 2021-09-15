import React from 'react'
const Checkmark = (props) => {
  return (
    <button className={props.buttonClass} onClick={props.onClick} id={props.id}>
      <span>
        <div className={props.stemClass} />
        <div className={props.kickClass} />
      </span>
    </button>
  )
}
export default Checkmark
