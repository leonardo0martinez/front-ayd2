import React from "react";
import { useEffect, useState } from 'react';

import { Header } from "../components/header";
import { Player } from "../components/player";


export function Teams(){

    const [data, setData] = useState();
    const [players, setPlayers] = useState();

    //http://localhost:5000/team/getTeams
    useEffect(() => {        
        const reqOps = {
            method: 'GET',            
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/team/getTeams`, reqOps)
        .then(res => res.json())
        .then(data => setData(data));
    }, []);


    const getPlayers = async (idTeam) => {
        // http://localhost:5000/player/getPlayers/1
        const reqOps = {
            method: 'GET',            
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/player/getPlayers/${idTeam}`, reqOps)
        .then(res => res.json())
        .then(data => setPlayers(data));
    }

    // console.log(data);
    // console.log(players);
    return(
        <div className="container-fluid p-0">
            <Header></Header>
            {/* CONTENEDOR */}
            <div className="container text-center">
                <div className="row">
                    {/* SELECCIONES */}
                    <div className="col-3">
                        <h4 style={{fontWeight:"normal"}}>Selecciones</h4>
                        <hr></hr>
                    
                        {/* LISTA DE SELECCIONES */}
                        {
                            data !== undefined && 
                            data.equipos.map( (team) => {
                                return(
                                    <div key={team.id_equipo} id="event-list" 
                                        className="list-group-item list-group-item-action mb-2 text-start" 
                                        style={{cursor:"pointer"}}
                                        onClick={() => getPlayers(team.id_equipo)}>
                                        <img src={team.url_img} width="50" alt="South Africa" className="me-4"/>
                                        {team.nombre}
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="col-1"></div>
                    
                    {/* JUGADORES */}
                    <div className="col-8">
                        <h4 style={{fontWeight:"normal"}}>Jugadores</h4>
                        <hr></hr>
                        
                        {/* LISTA DE JUGADORES */}
                        <div className="container-fluid p-0">
                            <div className="row justify-content-center align-items-center">
                                {
                                    players !== undefined &&
                                    players.jugadores.map((player) => {
                                        return(
                                            <Player key={player.id_jugador} 
                                                name={player.nombre} 
                                                img={player.url_img}
                                                position={player.posicion}
                                                age={player.edad}
                                                number={player.numero}></Player>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}