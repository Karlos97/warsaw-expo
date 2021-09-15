import React from 'react'
import classes from './Menu.module.scss'
import buttonClasses from '../others/Button.module.scss'
import Button from '../others/Button'
import { useCardContext } from '../../context/CardContext'

import { uuid } from 'uuidv4'

const Menu = (props) => {
  const menuButtonsClass = buttonClasses['button-normal']

  const { addNote, removeAllNotes, sortNotes } = useCardContext()

  const id = uuid()

  const handleOnRemoveAllNotes = () => {
    props.create3kElements()
    removeAllNotes()
  }
  const handleAddNote = () => {
    addNote({
      id,
      check: false
    })
  }
  const handleSortNotes = () => {
    sortNotes()
  }
  const handleCreate3knotes = () => {
    props.create3kElements()
    for (let i = 0; i < 3000; i++) {
      const id = uuid()
      addNote({
        id,
        check: false,
        description: 'Creating 3k notes.'
      })
    }
  }

  return (
    <div className={classes.menu}>
      <Button buttonClass={menuButtonsClass} onClick={handleAddNote}>
        ADD NOTE
      </Button>
      <Button buttonClass={menuButtonsClass} onClick={handleOnRemoveAllNotes}>
        DELETE ALL NOTES
      </Button>
      <Button buttonClass={menuButtonsClass} onClick={handleCreate3knotes}>
        CREATE 3K NOTES
      </Button>
      <Button buttonClass={menuButtonsClass} onClick={handleSortNotes}>
        SORT NOTES
      </Button>
    </div>
  )
}
export default Menu
