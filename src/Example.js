import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Example() {
    // Déclaration d'une nouvelle variable d'état, que l'on appellera “count”
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Vous avez cliqué {count} fois</p>
        <button onClick={() => setCount(count + 1)}>
          Cliquez ici
        </button>
      </div>
    );
  }

  export default Example;
