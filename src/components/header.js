import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';

import { LoginForm } from "./login-form";

export function Header() {
    const [showLogin, setShowLogin] = useState(false);

    const login = () => {
        if(showLogin){
            setShowLogin(false);
        }else{
            setShowLogin(true);
        }
    };

    return (
        <nav className="navbar navbar-inverse navbar-expand-lg navbar-light bg-light p-3 m-0">
            <a className="navbar-brand" href="/">Copa Mundial 2026</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-link">Home</Link>
                    <Link to="/events" className="nav-item nav-link">Eventos</Link>
                    <Link to="/teams" className="nav-item nav-link">Equipos</Link>
                    <Link to="/stadiums" className="nav-item nav-link">Estadios</Link>
                    <Link to="/knockout" className="nav-item nav-link">Fase Eliminatoria</Link>
                    <span role="button" className="nav-item nav-link" onClick={login}>Iniciar Sesión</span>
                </div>
            </div>
            {
                showLogin && 
                <div className="login bg-light" style={{zIndex:"1090"}}>
                    <LoginForm></LoginForm>
                </div>
            }
        </nav>
    );
}