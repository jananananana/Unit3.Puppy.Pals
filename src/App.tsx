import { useState } from 'react'
import './App.css'

import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  console.log(puppies);
  return (
    <>
      <div className='puppy-container'>
        {puppies.map((puppy) => {
          return <button className="plain-link c-puppy-link" onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id} >{puppy.name}</button>
        })}

        {featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default App
