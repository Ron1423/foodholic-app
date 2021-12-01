import React from 'react';
import './styles.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Details from './pages/details';
import FoodDetails from './components/fooddetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/details" element={<Details />}>
        <Route path=":foodId" element={<FoodDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
