import React, { useState } from 'react'
import './App.scss'
import ToDoList from './components/ToDoList/ToDoList'
import Menu from './components/ToDoList/Menu'

function App () {
  const [create3kElements, setCreate3kElements] = useState(false)
  const handleOnCreate3kElements = () => {
    setCreate3kElements(!create3kElements)
  }

  return (
    <div className='app'>
      <header className='app-header'>
        This is recruitment task for Warsaw-Expo company.
      </header>
      <Menu create3kElements={handleOnCreate3kElements} />

      <ToDoList create3kElements={create3kElements} />
    </div>
  )
}

export default App
