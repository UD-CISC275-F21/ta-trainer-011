import React, { useState } from 'react';
import './App.css';
import { Prompt } from './components/Prompt';
import { SwapButton } from './components/SwapButton';
import './utilities/addition';

function App(): JSX.Element {
  const [prompt, setPrompt] = useState<string>("Do Something!");
  
  return (
    <div className="App">
      <Prompt text={prompt}></Prompt>
      <SwapButton change={setPrompt}></SwapButton>
    </div>
  );
}

export default App;
