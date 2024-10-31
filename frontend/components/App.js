import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './Character'
import { response } from 'express'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  const [planets, setPlanets] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    axios.get(urlPlanets)
    .then((response) => {
      setPlanets(response.data);
    })
    .catch((error) => {
      console.error("Error fetching planets data:", error);
    });
  },[]);

useEffect(() =>{
  axios.get(urlPeople)
  .then((response) =>{
    setPeople(response.data);
  })
  .catch((error) => {
    console.log("Error fetching people data:", error);
  });
},[])



  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {people.map((character) => (
  <Character
    key={character.id}
    name={character.name}
    planet={planets.find((planet) => planet.id === character.planetId)}
  />
))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App


{people.map((character) => (
  <Character
    key={character.id}
    name={character.name}
    planet={planets.find((planet) => planet.id === character.planetId)}
  />
))}