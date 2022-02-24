import { getMessage, setMessage } from './services/api';
import { useState } from 'react';

import Header from './components/Header';
import Content from './components/Content';

function App() {
  const [messageText, setMessageText] = useState('');
  const [inputValue, setInputValue] = useState(messageText);

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vw',
      }}
    >
      <Header />
      <Content />
    </div>
  );
}

export default App;
