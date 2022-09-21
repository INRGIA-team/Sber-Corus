import React, {useContext} from 'react';
import './App.css';
import Toolbar from './components/toolbar/Toolbar';
import CarList from './components/cars/CarList';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import CarPage from './components/cars/CarPage';
import {Modal} from './components/Modal'
import {CreateCar} from "./components/creation/CreateCar";
import {ModalContext} from "./ModalContext/ModalContext";
import Creation from './components/cars/Creation';

function App() {

    return (
        <>
          <Router>

          <div className="wrap-header">
            <div className="logo">
                <div className="main-logo">Simple REST API</div>
                <div className="wrap-mini-logo">
                    <div className="top-logo">by Ingria team</div>
                    <div className="bottom-logo">for SberCorus</div>
                </div>
            </div>
          </div>
          <div>
            
          </div>

              <Routes>
                <Route path="/" element={<CarList></CarList>}></Route>
                <Route path="/car/new" element={<Creation></Creation>}></Route>
                <Route path="/car/:id" element={<CarPage></CarPage>}></Route>
              </Routes>
          </Router>

        </>
    );
}

export default App;
