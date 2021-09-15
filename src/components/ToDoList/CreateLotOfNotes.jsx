import React, { useState } from 'react'
// import classes from "./ToDoList.module.scss";
import classes from './CreateLotOfNotes.module.scss'
import Note from './Note'
import { useCardContext } from '../../context/CardContext'
import InfiniteScroll from 'react-infinite-scroll-component'

const CreateLotOfNotes = (props) => {
  const loadElements = 75
  const { notes, changeDescription } = useCardContext()

  const [count, setCount] = useState({
    prev: 0,
    next: loadElements
  })
  const [hasMore, setHasMore] = useState(true)
  const [current, setCurrent] = useState(notes.slice(count.prev, count.next))
  const getMoreData = () => {
    if (current.length === notes.length) {
      setHasMore(false)
      return
    }
    const timer = setTimeout(() => {
      setCurrent(current.concat(notes.slice(count.prev + loadElements, count.next + loadElements)))
    }, 5000)
    if (!props.enabled) {
      clearTimeout(timer)
    }
    setCount((prevState) => ({
      prev: prevState.prev + loadElements,
      next: prevState.next + loadElements
    }))
  }

  return (

    <InfiniteScroll
      dataLength={current.length}
      next={getMoreData}
      hasMore={hasMore}
        // loader={<h4 style={{display:"block"}}>Loading...</h4>}
      loader={<h4>Loading...</h4>}
      height={750}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
          }
      className={classes['infinite-scroll']}
    >
      {/* <ul className={props.style}> */}
      {current &&
          current.map((el) => (
            <Note
              id={el.id}
              key={el.id}
              checked={el.check}
              description={el.description}
              handleOnTextChange={(e, id) => {
                const description = e.currentTarget.value
                changeDescription({
                  id,
                  description
                })
              }}
            />

          ))}

      {/* </ul> */}

    </InfiniteScroll>

  )
}
export default CreateLotOfNotes
