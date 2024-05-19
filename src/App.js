// Import libraries
import React from 'react';
import { HashRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';


const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <AnimRoutes/>
      </Router>
    </div>
  );
};

export default App;