import React from "react";
import { useState } from 'react';
import { AddCountry } from "../admin/add-country";
import { AddPlayer } from "../admin/add-player";
import { AddReferee } from "../admin/add-referee";
import { AddTeam } from "../admin/add-team";

export function Dashboard(){
    
    const [tabIndex, setTabIndex] = useState(1);

    return(
        <div className="container-fluid p-0">
            
            <div className="row p-0 m-0" style={{height:"100vh"}}>
                <div className="col-lg-3 p-5 text-center">
                    <h3 className="">Dashboard</h3>
                    <hr/>
                    <div className="d-block w-100">
                        <ul className="list-group">
                            <li id="event-list" className="list-group-item list-group-item-action"
                                onClick={()=>setTabIndex(1)}>Agregar Equipo</li>
                            <li id="event-list" className="list-group-item list-group-item-action"
                                onClick={()=>setTabIndex(2)}>Agregar País</li>
                            <li id="event-list" className="list-group-item list-group-item-action"
                                onClick={()=>setTabIndex(3)}>Agregar Jugador</li>
                            <li id="event-list" className="list-group-item list-group-item-action"
                                onClick={()=>setTabIndex(4)}>Agregar Árbitro</li>
                            <li id="event-list" className="list-group-item list-group-item-action"
                                onClick={()=>{
                                    localStorage.clear();
                                    window.location.href = "./";
                                    setTabIndex(4);
                                }}>Cerrar Sesión</li>
                        </ul>
                    </div>
                </div> 

                <div className="col-lg-9 p-5">
                    {
                        tabIndex === 1 &&
                        <AddTeam></AddTeam>
                    }
                    {
                        tabIndex === 2 &&
                        <AddCountry></AddCountry>
                    }
                    {
                        tabIndex === 3 &&
                        <AddPlayer></AddPlayer>
                    }
                    {
                        tabIndex === 4 &&
                        <AddReferee></AddReferee>
                    }
                </div>

            </div>
        </div>
    );
}