import Header from './components/Header';
import Content from './components/Content';

function App() {

  return (
    <div
      className='App'
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
