
import './App.css';
import Kids from './components/Kids2'
import Mens from './components/Mens2';
import Women from './components/Women2';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
//import Navbar from './components/Navbar';
import { Greeting } from './components/Greeting';
 import {Login} from './components/Login'
import DynamicCss from './components/Dynamiccss';
import DynamicClasses from './components/DynamicClasses';
import Props from './components/Props';
import Childrenprops from'./components/Childrenprops';
import RegisterForm from'./components/RegisterForm';
import GetProducts from './components/GetProducts'
import TakeProduct from './components/TakeProduct'
import HandleLoading from './components/HandleLoading';
import LoginForm from './components/LoginForm'
function App() {
  return (
    <div className="App">
     { /*<Navbar/>*/}
      <Routes>
        <Route path='/Loginform'  element={<LoginForm/>}/>
        <Route path='/HandleLoading' element={<HandleLoading/>}/>
        <Route path='/TakeProduct' element={<TakeProduct/>}/>
        <Route path='/GetProduts' element={<GetProducts/>}/>
        <Route path='/RegisterForm' element={<RegisterForm/>}/>
        <Route path='/Childrenprops' element={<Childrenprops myValue='Sign Up' />}/>
        <Route path='/Props' element={<Props myName="Irise" myAge='20'/>}/>
        <Route path='/DynamicClasses' element={<DynamicClasses/>} />
        <Route path='/Dynamiccss' element={<DynamicCss/>} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Greeting' element={<Greeting />} />
        <Route path='/' element={<Home />} />
        <Route  path='/Kids' element={<Kids  items={['kuchbhi','hello',"world","pratu"]}/>}/>
        <Route  path='/Mens' element={<Mens images={["data:image/jpeg;base64,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","data:image/jpeg;base64,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"]}/>}/>
        <Route  path='/Women' element={<Women isLogged="false" />}/>
      </Routes>
      
      
    
    </div>
      
  );
}

export default App;
