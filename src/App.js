import './App.css';
import Transaction from './Components/LastTransaction/transaction';
import Slider from './Components/Slider/Slider';
import StoreOrder from './Components/StoreOrderAnalysis/storeOrder';
import TopSale from './Components/TopSaleCategory/topSale';
import Total from './Components/Total data/total';
import WelcomBar from './Components/WelcomeBar/welcomBar';
import Widget from './Components/widgets/widget';

function App() {
  return (
    <div className="App h-screen bg-gray-200">
      <div className='outline'>
        <Slider/>
        <div className='widget'>
          <WelcomBar/>
          <Widget/>
          <Total/>
          <div className='split'>
            <StoreOrder/>
            <TopSale/>
          </div>
          <Transaction/>
        </div>
      </div>
    </div>
  )
}
export default App;