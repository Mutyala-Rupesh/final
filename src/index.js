import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import MovieInformation from './components/MovieInformation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/movies/:id' element={<MovieInformation/>}></Route>
    </Routes>
  </Router>
);
