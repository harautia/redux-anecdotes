import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    console.log(anecdotes)
    console.log(filter)
    if (filter === '_initial_ALL') {
      return anecdotes 
    }
    else {
      const result = anecdotes.filter(anecdote => anecdote.content.includes(filter))
      return result
    }
    })

  console.log("Anecdote List", anecdotes)

  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(addVote(anecdote.id))}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList