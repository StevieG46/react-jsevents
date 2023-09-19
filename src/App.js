import React from 'react';
import './App.css';

// We'll make a page that let's us increase or decrease
// how many pokemon are on the screen
// App component needs to:
// - keep track of how many Pokemon to show 
// - iterate over a single, D.R.Y modular Pokemon component 
// - button to increase Pokemon count
// - button to decrease Pokemon count 

class App extends React.Component {
  constructor(){
    super();

    // Start with at least 1 pokemon on screen
    this.state = {
      pokemonCount: 1
    }
  }
  render(){
    return(
      <div>
        <h1> Pokemon page</h1>
      </div>
    )
  }
}



export default App;
