import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from "../Home/Home";
import Uzytkownicy from "../Uzytkownicy/Uzytkownicy";
// import logo from './img/logo.png';
import LogoutX from "../Logout/Logout";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import Mapa from "../Mapa/Mapa";

import UserPanel from "../Userpanel/Userpanel";


import '../App.css';
import './MainWindow.css';

function MainWindow({ handleLogout, serverMessage, role }) {
    const [alertMessage, setAlertMessage] = useState('null');
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Router>
            <LogoutX onLogout={handleLogout} />
            <UserPanel></UserPanel>
            <div className="alert"></div>
            <div className="MainWindow noSelect">
                <div className="alert"> {/* ALERT SYSTEMOWY/TESTOWY */}
                    {serverMessage && <div>{serverMessage}</div>}
                </div>

                <div className="COL2">
                    <div className="A2">
                        <button onClick={handleMenuToggle} className="menu-button">
                            ☰
                        </button>
                        <div className={`MENU ${isOpen ? 'open' : ''}`}>

                            <Link to="/Home" >Twój dom</Link>
                            <Link to="/Mapa" >Mapa</Link>
                            {role === 'admin' && <Link to="/Uzytkownicy">Uzytkownicy</Link>}
                        </div>
                    </div>
                    <div className="B2 OKNO">
                        <div id="content">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/Home" element={<Home />} />
                                <Route path="/Mapa" element={<Mapa />} />
                            </Routes>
                            {/* PANEL ADMINISTRACYJNY */}
                            <PrivateRoute path="/Uzytkownicy" element={<Uzytkownicy />} setAlertMessage={setAlertMessage} />
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default MainWindow;
