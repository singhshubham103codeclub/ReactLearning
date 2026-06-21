import React from 'react'
import Card from './components/card.jsx'
import User from './components/user.jsx'
import { jobs } from './data/cardsData.js'
const App = () => {
  // const users = [
  //   { id: 1, name: 'John Doe' },
  //   { id: 2, name: 'Jane Smith' },
  //   { id: 3, name: 'Alice Johnson' },
  //   { id: 4, name: 'Bob Brown' },
  // ];
  // console.log(users)
  // console.log(jobs)
  return (
    <div className='parent'>
      {jobs.map(job => (
        <Card key={job.id}{...job} />
      ))}
      {/* {users.map(user => (
        <User key={user.id} name={user.name} />
      ))} */}
    </div>
  )
}


export default App