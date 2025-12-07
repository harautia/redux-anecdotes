import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState:[],
  reducers: {
    addAnecdote(state, action) {
      state.push(action.payload)
    },
    updateAnecdote(state, action) {
      const updated = action.payload
      return state
        .map(anecdote => anecdote.id === updated.id ? updated : anecdote)
        .sort((a, b) => b.votes - a.votes)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

const { addAnecdote, updateAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const appendAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(addAnecdote(newAnecdote))
  }
}

export const appendAnecdoteVote = (id) => {
  return async (dispatch, getState) => {
    // Collect the used ID
    const anecdote = getState().anecdotes.find(a => a.id === id)
  
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    
    // Send to backend and get the updated anecdote back
    const savedAnecdote = await anecdoteService.updatedVote(id, updatedAnecdote)
    
    // Update just this one anecdote in Redux. Other option would have been to use
    // getAll but this optimized the transfer since only updated is sent
    dispatch(updateAnecdote(savedAnecdote))
  }
}

export default anecdoteSlice.reducer