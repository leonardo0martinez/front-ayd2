import React from "react";

import { Header } from "../components/header";
import { Event } from "../components/event";
import { EventDetails } from "../components/event-details";

export function Events(){
    return(
        <div className="container-fluid p-0">
            
            {/* MENU */}
            <Header></Header>
            {/* CONTENEDOR */}
            <div className="container">
                
                <div className="row">
                    {/* PARTIDOS */}
                    <div className="col-5 text-center">

                        {/* TITULO */}
                        <h4 style={{fontWeight:"normal"}}>Partidos</h4>
                        <hr></hr>

                        {/* LISTA DE PARTIDOS */}
                        <div className="list-group">
                            <div id="event-list" className="list-group-item list-group-item-action mb-2" 
                                style={{cursor:"pointer"}}
                                onClick={()=>{console.log("HOLA XD ")}}>
                                <Event team1="Argentina" team2="Holanda" gol1="4" gol2="3"/>
                            </div>
                            <div id="event-list" className="list-group-item list-group-item-action mb-2" 
                                style={{cursor:"pointer"}}
                                onClick={()=>{console.log("HOLA XD ")}}>
                                <Event team1="Arabia Saudita" team2="Holanda" gol1="4" gol2="3"/>
                            </div>
                            <div id="event-list" className="list-group-item list-group-item-action mb-2" 
                                style={{cursor:"pointer"}}
                                onClick={()=>{console.log("HOLA XD ")}}>
                                <Event team1="Argentina" team2="Holanda" gol1="4" gol2="3"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>

                    {/* DETALLE DE PARTIDO */}
                    <div className="col-6 text-center">
                        <h4 style={{fontWeight:"normal"}}>Datos de Partido</h4>
                        <hr></hr>
                        <EventDetails teams={{id1:0, id2:0, team1:"Argentina", team2:"Holanda", gol1:"4", gol2:"3"}}></EventDetails>
                    </div>
                </div>
            </div>
        </div>
    );
}