import React from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import logo from './assets/logo.png';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
    </div>
  );
};

export default App;
