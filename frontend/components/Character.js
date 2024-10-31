import React, { useState } from 'react'

function Character({ name, planet }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShoeHomeworld((prevShowHomeworld) => !prevShowHomeworld);
  };


  return (
    <div className='character'>
      <h3>{name}</h3>
      <button onClick={toggleHomeworld}>
        {showHomeworld ? 'Hide homeworld' : 'Show Homeworld'}
      </button>
      {showHomeworld && planet && (
        <p className='homeworld'>Homeworld: {planet.name}</p>
      )}
    </div>
  );
}

export default Character
