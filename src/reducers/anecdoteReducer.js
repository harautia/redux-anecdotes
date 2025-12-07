import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState:[],
  reducers: {
    addAnecdote(state, action) {
      state.push(action.payload)
    },
    addVote(state, action) {
      const id = action.payload
      const updatedVote = state.map(state => state.id === id 
      ? { ...state, votes: state.votes +1 }: state)
      const sortedAnecdotes = updatedVote.sort((a, b) => b.votes - a.votes)
      return sortedAnecdotes  
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

const { setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const { addAnecdote, addVote } = anecdoteSlice.actions
export default anecdoteSlice.reducer