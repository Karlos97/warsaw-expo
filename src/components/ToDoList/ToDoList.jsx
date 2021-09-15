import React from 'react'
import classes from './ToDoList.module.scss'
import Note from './Note'
import { useCardContext } from '../../context/CardContext'
import CreateLotOfNotes from './CreateLotOfNotes'

const ToDoList = (props) => {
  const { notes, changeDescription } = useCardContext()

  const doneNotes = notes.filter((el) => el.check === true)
  if (doneNotes.length > 0) {
    console.log('This notes were "checked":')
    console.log(doneNotes)
  } else {
    console.log('"Checked" notes list is empty.')
  }
  return (
    <section className={classes.container}>
      <ul className={classes['container-list']}>
        {!props.create3kElements ? (
          notes.map((el) => {
            return (
              <Note
                id={el.id}
                key={el.id}
                checked={el.check}
                description={el.description}
                handleOnTextChange={(e, id) => {
                  // textChange={(e, id) => {
                  const description = e.currentTarget.value
                  changeDescription({
                    id,
                    description
                  })
                }}
              />
            )
          })
        ) : (
          <CreateLotOfNotes
            style={classes['container-list']}
            enabled={props.create3kElements}
          />
        )}
      </ul>
    </section>
  )
}
export default ToDoList
