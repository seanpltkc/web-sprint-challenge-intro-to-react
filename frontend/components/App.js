import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './Character'


const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  const [characters, setCharacters] = useState([])
  const [planets, setPlanets] = useState([])
  const [formattedData, setFormattedData] = useState([])

  function formatData(characters, planets) {
    return characters.map((character) => {
      return {
        ...character,
        homeworld: planets.find(
          (planet) => planet.id === character.homeworld
        ),
      };
    });
  }

  useEffect(() => {
    const planetsData = axios.get(urlPlanets);
    const peopleData = axios.get(urlPeople);
    Promise.all([planetsData, peopleData])
      .then((res) => {
        setCharacters(res[1].data);
        setPlanets(res[0].data);
        return res;
      })
      .then((res) => {
        setFormattedData(formatData(res[1].data, res[0].data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {formattedData.map(character => {
        console.log(character)
        return <Character key={character.id} characterName={character.name} planetName={character.homeworld.name} />
      })}
    </div>
  )
}

export default App
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App