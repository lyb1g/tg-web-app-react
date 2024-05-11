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
      <button onClick={onClose}>Close</button>
      <span>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
}

export default App;
