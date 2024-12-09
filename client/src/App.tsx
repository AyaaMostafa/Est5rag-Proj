import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import UploadImage from './Components/UploadImage';

import 'bootstrap/dist/css/bootstrap.min.css';

// @ts-ignore
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadImage />} />
      </Routes>
    </Router>
  );
}

export default App;
