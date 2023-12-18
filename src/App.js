
import './App.css';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import About from './pages/About';
import BasicAccordion from './pages/BasicAccordion';







function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Routes>
<Route index element={<Home/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/signup' element={<SignUp/>}/>
<Route path='/signin' element={<SignIn/>}/>
<Route path='/about' element={<About/>}/>


      </Routes>
      
    </BrowserRouter> 
    

   
    
    </div>
  );
}

export default App;
