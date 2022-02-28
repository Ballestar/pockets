import logo from './logo.svg';
import './App.css';
import ConnectWallet from './components/ConnectWallet';
import { useEthers } from '@usedapp/core'

function App() {
  const { activateBrowserWallet, deactivate, account } = useEthers()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <div>
          {!account && <button onClick={activateBrowserWallet}> Connect </button>}
          {account && <button onClick={deactivate}> Disconnect </button>}
        </div>      
      </header>
    </div>
  );
}

export default App;
