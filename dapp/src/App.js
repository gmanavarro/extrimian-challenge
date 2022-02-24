import { getMessage, setMessage } from './services/api';
import { useState } from 'react';

function App() {
  const [messageText, setMessageText] = useState('');
  const [inputValue, setInputValue] = useState(messageText);

  const handleSubmit = async (message) => {
    await setMessage(message);
    setMessageText(await getMessage());
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="App">
      <div>
        <input onChange={handleInputChange} type="text" />
        <button onClick={() => handleSubmit(inputValue)}>Click me</button>
      </div>
      <h2>{messageText}</h2>
    </div>
  );
}

export default App;
