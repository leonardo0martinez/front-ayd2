import React from "react";

import { Header } from "../components/header";
import { Stadium } from "../components/stadium";

export function Stadiums(){
    return(
        <div className="container-fluid p-0">

            {/* MENU */}
            <Header></Header>
            <div className="container text-center">
                {/* TITULO */}
                <h4 style={{fontWeight:"normal"}}>Estadios y Ciudades Sede</h4>
                <hr></hr>

                <div className="container-fluid">
                    <div className="row">
                        {/* LISTA DE ESTADIOS */}
                        <Stadium 
                            name={"Nombre del Estadio"} 
                            img={"https://dummyimage.com/600x400/000/fff"}
                            city={"Ciudad"}
                            capacity={20}></Stadium>
                    </div>
                </div>
            </div>
        </div>
    );
}