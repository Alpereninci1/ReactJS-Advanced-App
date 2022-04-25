import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Users from './pages/Users';
function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={< Users />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
