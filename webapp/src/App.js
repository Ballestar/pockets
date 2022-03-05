import logo from './logo.svg';
import './App.css';
import ConnectWallet from './components/ConnectWallet';
import { useEthers } from '@usedapp/core'
import Navbar from './components/Navbar';
function App() {
  const { activateBrowserWallet, deactivate, account } = useEthers()

  return (
    <div class='px-20 bg-teal-500'>
      <Navbar/>
      <div class="grid grid-cols-7 grid-rows-3 gap 4" >
        <div class="...">01</div>
        <div class="col-span-5 ...">02</div>
        <div class="...">03</div>
      </div>
    </div>
  );
}

export default App;
