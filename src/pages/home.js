import React from "react";

import { Header } from "../components/header";

export function Home(){
    return(
        <div className="container-fluid p-0">
            
            <Header/>
            <div className="container">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" >
                    <div className="px-3" style={{marginTop:"20vh"}}>
                    {/* <img
                        src="https://flagcdn.com/w320/za.png"
                        srcset="https://flagcdn.com/w640/za.png 2x"
                        width="320"
                        alt="South Africa">
                    </img> */}
  
                        <h1>Proyecto - AYD XD</h1>
                        <p className="lead">
                        Esta aplicación está permite compartir publicaciones a los usuarios registrados. 
                        Tiene las funcionalidades de login, registro de usuarios, ver
                        publicaciones, crear publicaciones, chatear con amigos y bots para obtener información sobre la
                        facultad de ingenieria, así como la traducción de publicaciones.
                        </p>
                        <p className="lead">
                            <a href="/" className="btn btn-lg btn-danger">Repositorio Gitlab</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}