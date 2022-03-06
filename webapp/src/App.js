import logo from './logo.svg';
import './App.css';
import ConnectWallet from './components/ConnectWallet';
import { useEthers } from '@usedapp/core';
import Navbar from './components/Navbar';
import CurrentNFT from './components/CurrentNFT';
import CardDescription from './components/CardDescription';
import CardID from './components/CardID';
import StackedNFT from './components/StackedNFT';
import NFTDropdown from './components/NFTDropdown';

function App() {
  const { activateBrowserWallet, deactivate, account } = useEthers()

  return (
    <div class='px-20 bg-teal-500'>
      <Navbar my-5> </Navbar>
      <div class="flex flex-wrap grid grid-cols-7 grid-rows-4 gap 4" >
        <CardID class="col-span-1 ..."></CardID>
        <CurrentNFT class="..."></CurrentNFT>
        <StackedNFT class="..."></StackedNFT>
        <NFTDropdown class="..."></NFTDropdown>
        <CardDescription class="col-span-1 ..."></CardDescription>

      </div>
    </div>
  );
}

export default App;
