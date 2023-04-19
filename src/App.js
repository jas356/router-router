import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './scenes/Home.jsx';
import About from './scenes/About.jsx';

function App() {
  
  return (
    <>
    
    <h1>H1: This is the Title of the Site</h1>
   <BrowserRouter>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/"      element={<Home />} />
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
