import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// App components
import Nav from './Nav';


// main container component
function App() {
  return (
    <BrowserRouter>
      <div className="React Gallery App">
        <header className="App-header">
          <Nav />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
