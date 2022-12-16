import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from "./pages/home";
import { Events } from "./pages/events";
import { Teams } from "./pages/teams";
import { Stadiums } from "./pages/stadiums";
import { Knockout } from "./pages/knockout";
import { Dashboard } from "./pages/dashboard";

export function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Home/> } />
                    <Route path='/events' element={ <Events/> } />
                    <Route path='/teams' element={ <Teams/> } />
                    <Route path='/stadiums' element={ <Stadiums/> } />
                    <Route path='/knockout' element={ <Knockout/> } />
                    { localStorage.getItem("id_user") && <Route path='/dashboard' element={ <Dashboard/> } /> }
                </Routes>
            </BrowserRouter>
        </div>
    )
}