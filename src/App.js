import './App.css';
// import Banner from './assests/Banner.png'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Education from './components/Education';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
    <Route path='/' Component={Layout}/>
    <Route path='/education' Component={Education}/>
      </Routes>
      
    </BrowserRouter>
  
</>
      );
}

export default App;
