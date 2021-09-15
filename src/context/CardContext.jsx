import React, {
  useReducer,
  createContext,
  useContext,
  useCallback,
  useMemo
} from 'react'

export const ACTION_ADD_NOTE = 'ACTION_ADD_NOTE'
export const ACTION_REMOVE_NOTE = 'ACTION_REMOVE_NOTE'
export const ACTION_REMOVE_ALL_NOTES = 'ACTION_REMOVE_ALL_NOTES'
export const ACTION_MARK_CHECKED = 'ACTION_MARK_CHECKED'
export const ACTION_SORT_NOTES = 'ACTION_SORT_NOTES'
export const ACTION_CHANGE_DESCRIPTION = 'ACTION_CHANGE_DESCRIPTION'
export const ACTION_CREATE_3K_ELEMENTS = 'ACTION_CREATE_3K_ELEMENTS'

function cardReducer (state, action) {
  switch (action.type) {
    case ACTION_ADD_NOTE: {
      return {
        ...state,
        notes: [...state.notes, action.payload]
      }
    }
    case ACTION_REMOVE_NOTE: {
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id)
      }
    }
    case ACTION_REMOVE_ALL_NOTES: {
      return {
        ...state,
        notes: []
      }
    }
    case ACTION_MARK_CHECKED: {
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (action.payload.id === note.id) {
            note.check = !action.payload.checked
          }
          return note
        })
      }
    }
    case ACTION_CHANGE_DESCRIPTION: {
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (action.payload.id === note.id) {
            note.description = action.payload.description
          }
          return note
        })
      }
    }
    case ACTION_SORT_NOTES: {
      return {
        ...state,
        notes: state.notes?.sort((note) => (note.check ? 1 : -1))
      }
    } case ACTION_CREATE_3K_ELEMENTS: {
      return {
        ...state,
        notes: [...state.notes, action.payload]

      }
    }

    default:
      return state
  }
}
const CardContext = createContext()
function useCardContext () {
  const context = useContext(CardContext)
  if (context === undefined) {
    throw new Error('useCardContext must be used within a CardContextProvider')
  }
  return context
}

function CardContextProvider ({ children, initialState }) {
  const [state, dispatch] = useReducer(cardReducer, {
    notes: [],
    ...initialState
  })

  const addNote = useCallback((newNote) => {
    dispatch({
      type: ACTION_ADD_NOTE,
      payload: newNote
    })
  }, [])

  const removeNote = useCallback((noteId) => {
    dispatch({
      type: ACTION_REMOVE_NOTE,
      payload: noteId
    })
  }, [])
  const removeAllNotes = useCallback(() => {
    dispatch({
      type: ACTION_REMOVE_ALL_NOTES
    })
  }, [])
  const changeNoteCheck = useCallback((noteId, checked) => {
    dispatch({
      type: ACTION_MARK_CHECKED,
      payload: noteId,
      checked
    })
  }, [])
  const sortNotes = useCallback(() => {
    dispatch({
      type: ACTION_SORT_NOTES
    })
  }, [])
  const changeDescription = useCallback((noteId, description) => {
    dispatch({
      type: ACTION_CHANGE_DESCRIPTION,
      payload: noteId,
      description
    })
  }, [])
  const create3kElementes = useCallback(() => {
    dispatch({
      type: ACTION_CREATE_3K_ELEMENTS
    })
  }, [])
  const value = useMemo(
    () => ({
      ...state,
      addNote,
      removeNote,
      removeAllNotes,
      changeNoteCheck,
      sortNotes,
      changeDescription,
      create3kElementes
    }),
    [
      state,
      addNote,
      removeNote,
      removeAllNotes,
      changeNoteCheck,
      sortNotes,
      changeDescription,
      create3kElementes
    ]
  )

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}
export { CardContextProvider, useCardContext }
