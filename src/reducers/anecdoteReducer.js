import { createSlice } from '@reduxjs/toolkit'

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

export const { addAnecdote, addVote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer