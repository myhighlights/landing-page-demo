import React from 'react';
import { BrowserRouter as Router, Route, Routes,  Navigate } from 'react-router-dom';
import Demo from '../pages/Demo';
import Highlight from '../pages/Highlight';
import Game from '../pages/Game';
import HeaderDEMO from '../components/demo/header/Header';

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
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
        <Route path="*" element={<Navigate to="/demo/games" />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
