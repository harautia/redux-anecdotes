import { useDispatch } from 'react-redux'
import { appendAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const add = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(appendAnecdote(content))
  }

  return (
    <div>       
    <h2>create new</h2>
    <form onSubmit={add}>
        <input name="anecdote" /> 
        <button type="submit">add</button>
    </form>
    </div>       
    )
}

export default AnecdoteForm