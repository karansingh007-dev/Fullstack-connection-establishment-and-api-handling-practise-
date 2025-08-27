import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) =>
      {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error);
    })
  })
  return (
    <>
      <div>connected</div>
      <div>{jokes.length}</div>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.setup}</h3>
          <h3>{joke.punchline}</h3>
        </div>
      ))}
    </>
  );
}

export default App