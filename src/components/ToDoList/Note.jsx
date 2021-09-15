import React, { useState } from 'react'
import classes from './Note.module.scss'
import buttonClasses from '../others/Button.module.scss'
import { useCardContext } from '../../context/CardContext'

import Button from '../others/Button'
import Checkmark from '../others/Checkmark'
import TextInput from '../others/TextInput'
const Note = (props) => {
  const [checked, setChecked] = useState(false)

  const { removeNote, changeNoteCheck } = useCardContext()

  const handleRemoveNote = (id = props.id) => {
    removeNote({
      id
    })
  }
  const handleChangeNoteCheck = (id = props.id) => {
    changeNoteCheck({
      id,
      checked
    })
  }

  const noteClass = props.checked
    ? `${classes.note} + ${classes['note-checked']}`
    : `${classes.note} + ${classes['note-unchecked']}`

  return (
    <li className={noteClass} id={props.id}>
      <TextInput
        description={props.description}
        textChange={props.handleOnTextChange}
        id={props.id}
      >
        {props.children}
      </TextInput>

      <Button
        buttonClass={
          props.checked
            ? `${buttonClasses['button-delete']} ${buttonClasses['button-delete-checked']}`
            : `${buttonClasses['button-delete']} ${buttonClasses['button-delete-unchecked']}`
        }
        onClick={() => handleRemoveNote()}
      >
        <p>X</p>
      </Button>
      <Checkmark
        stemClass={buttonClasses['button-checkmark-stem']}
        kickClass={buttonClasses['button-checkmark-kick']}
        buttonClass={
          props.checked
            ? `${buttonClasses['button-checkmark']} ${buttonClasses['button-checkmark-checked']}`
            : `${buttonClasses['button-checkmark']} ${buttonClasses['button-checkmark-unchecked']}`
        }
        onClick={() => {
          handleChangeNoteCheck()
          setChecked(!checked)
        }}
      />
    </li>
  )
}
export default Note
