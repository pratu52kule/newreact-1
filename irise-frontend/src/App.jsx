
import './App.css';
import Kids from './components/Kids2'
import Mens from './components/Mens2';
import Women from './components/Women2';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route  path='/Kids' element={<Kids />}/>
        <Route  path='/Mens' element={<Mens />}/>
        <Route  path='/Women' element={<Women />}/>
      </Routes>
      
      
    
    </div>
      
  );
}

export default App;
