import React from "react";
import { useEffect, useState } from 'react';

import { Header } from "../components/header";
import { Brackets } from "../components/brackets";
import { Group } from "../components/group";

export function Knockout(){

    const [data, setData] = useState();
    useEffect(() => {        
        const reqOps = {
            method: 'GET',            
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/get/getGroups`, reqOps)
        .then(res => res.json())
        .then(data => setData(data));
    }, []);

    // console.log(data)

    let groups = [];
    if(data !== undefined){
        let letter = 65;
        for(let i = 1; i <= 8; i++){
            groups.push(
                <Group 
                    key={i}
                    name={String.fromCharCode(letter)} 
                    teams={data["grupo" + i]} 
                    points={data["puntajes" + i]}>
                </Group>
            );
            letter++;
        }
    }
    
    return(
        <div className="container-fluid p-0">

            {/* TITULO */}
            <Header></Header>
            
            {/* FASE DE GRUPOS */}
            <div className="container">
                {/* TITULO */}
                <div className="container-fluid p-0 text-center">
                    <h4 style={{fontWeight:"normal"}}>Fase de Grupos</h4>
                    <hr></hr>
                </div>

                {/* TABLAS DE GRUPOS */}
                <div className="row">
                    {
                        groups !== undefined &&
                        groups.map( (obj, index) => {
                            return(
                                obj
                            )
                        })
                    }
                </div>

            </div>

            {/* LLAVES */}
            <div className="container text-center">
                <h4 style={{fontWeight:"normal"}}>Llaves Eliminatorias</h4>
                <hr></hr>
                <div className="container-fluid p-0">
                    <Brackets></Brackets>
                </div>
            </div>
        </div>
    );
}