import React from 'react';
import { BrowserRouter as Router, Route, Routes,  Navigate } from 'react-router-dom';
import Header from '../components/header/Header';
import Home from '../pages/Home';
import Demo from '../pages/Demo';
import Highlight from '../pages/Highlight';
import Game from '../pages/Game';
import HeaderDEMO from '../components/demo/header/Header';

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/demo/games"
          element={
            <>
              <HeaderDEMO />
              <Demo />
            </>
          }
        />
        <Route
          path="/demo/games/:id"
          element={
            <>
              <HeaderDEMO />
              <Game />
            </>
          }
        />
        <Route
          path="/demo/games/:id/game/:videoParam"
          element={
            <>
              <HeaderDEMO />
              <Highlight />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
