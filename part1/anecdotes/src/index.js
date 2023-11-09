import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotesVotes)

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voteAnecdote = () => {
    const copy = [...votes]
    copy[selected].votes += 1
    setVotes(copy)
  }



  return (
    <div>
      {props.anecdotes[selected]}
      <br />
      has {anecdotesVotes[selected].votes} votes
      <br />
      <button onClick={randomAnecdote}>next anecdote</button>
      <button onClick={voteAnecdote}>vote</button>
      <br />
      <h1>Anecdote with most votes</h1>
      {votes.reduce((prev, current) => (prev.votes > current.votes) ? prev : current).anecdote}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const anecdotesVotes = [
  {anecdote: anecdotes[0], votes: 0},
  {anecdote: anecdotes[1], votes: 0},
  {anecdote: anecdotes[2], votes: 0},
  {anecdote: anecdotes[3], votes: 0},
  {anecdote: anecdotes[4], votes: 0},
  {anecdote: anecdotes[5], votes: 0}
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)