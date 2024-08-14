import './App.css';
// import Banner from './assests/Banner.png'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
    <Route path='/' Component={Layout}/>
      </Routes>
      
    </BrowserRouter>
  
</>
      );
}

export default App;
