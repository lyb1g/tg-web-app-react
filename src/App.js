import { useEffect } from 'react';
import './App.css';

function App() {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
    <span>Hello @{tg.initDataUnsafe?.user?.username}</span><br />
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
