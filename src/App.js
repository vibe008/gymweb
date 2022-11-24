
import './App.css';

import Faq from './Components/Faq';
import Header from './Components/Header';
import Home from './Components/Home';
import Join from './Components/Join';
import Mission from './Components/Mission';
import Pricing from './Components/Pricing';
import Slider from './Components/Slider';

import Workoutcon from './Components/Workoutcon';



function App() {


  return (
    <div className="App">
     <Header/>
     <Home/>
     <Mission/>
     <Workoutcon/>
     <Pricing/>
     <Slider/>
     <Faq/>
     <Join/>
    </div>
  );
}

export default App;
