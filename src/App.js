
import './App.css';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import About from './pages/About';
import MainPage from './pages/MainPage';
import PersonalProfile from './pages/PersonalProfile';
import Trash from './pages/Trash';









function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
<Route index element={<Home/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/signup' element={<SignUp/>}/>
<Route path='/signin' element={<SignIn/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/main' element={<MainPage/>}/>
<Route path='/profile' element={<PersonalProfile/>}/>
<Route path='/trash' element={<Trash/>}/>

 </Routes>
 </BrowserRouter> 




   </div>

  );
}

export default App;
