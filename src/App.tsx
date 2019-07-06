import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FunctionComponent<object> = (): JSX.Element => {
  const [name, setName] = useState<string>('');

  function handleChange({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void {
    setName(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" value={name} onChange={handleChange} />
        <p>{name}</p>
      </header>
    </div>
  );
};

export default App;
