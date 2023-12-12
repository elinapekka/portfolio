import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {useLayoutEffect} from 'react';
import HomePage from './HomePage';
import Jarpec from './components/Jarpec';
import Fitness from './components/Fitness';
import Recipes from './components/Recipes';
import Message from "./components/Message"


const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}


export default function App() {

  return (
    <div>
      <Message />
      <Router>
        <Wrapper>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/fitness-scheduler" element={<Fitness />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/jarpec" element={<Jarpec />} />
          </Routes>
        </Wrapper>
      </Router>
    </div>
  );
}
