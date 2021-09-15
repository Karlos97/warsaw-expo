import React from 'react'
import classes from './TextInput.module.scss'
import TextareaAutosize from 'react-textarea-autosize'

const TextInput = (props) => {
  return (
    <TextareaAutosize
      className={classes['note-input']}
      onChange={(e) => props.textChange(e, props.id)}
      placeholder='Write your thoughts'
      value={props.description ? props.description : ''}
      autoFocus
    />
  )
}
export default TextInput
