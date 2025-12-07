import { useSelector, useDispatch } from 'react-redux'
import { appendAnecdoteVote } from '../reducers/anecdoteReducer'
import { displayNotification } from '../reducers/notificationReducer'
import { hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ filter, anecdotes }) => {
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
            <button onClick={() => {
              dispatch(appendAnecdoteVote(anecdote.id))
              dispatch(displayNotification({ message: `you voted '${anecdote.content}'` }))
              setTimeout(() => {
                dispatch(hideNotification())
                }, 5000)
              }}> vote
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList