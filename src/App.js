import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main';
import Firstpage from './components/pages/Firstpage';
import Aboutpage from './components/pages/Aboutpage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
  
  useEffect(() => {

    const getMyNfts = async () => {
      
      const openseaData = await axios.get('https://cors-anywhere.herokuapp.com/https://testnets-api.opensea.io/assets?asset_contract_address=0x3CF55bDb2CF316f00Ea205661B009e3403F33779&order_direction=asc')
      //const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x3CF55bDb2CF316f00Ea205661B009e3403F33779&order_direction=asc')
      
        setPunkListData(openseaData.data.assets)
    }

    getMyNfts()
  }, []);

  return (
    <Router>
     <div className='app'>
      <Header />
      <Switch>
        <Route path="/" exact render={() => <Firstpage 
              punkListData={punkListData} 
              selectedPunk={selectedPunk}
              setSelectedPunk={setSelectedPunk}
          />}/> 
        
        <Route path="/mainpage" />

        <Route path="/aboutpage" exact render={() => <Aboutpage/>} />
        

      </Switch>

      </div> 
    </Router>
  )
}

export default App;
