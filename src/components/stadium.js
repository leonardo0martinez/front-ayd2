import React from "react";

export function Stadium({name, city, img, capacity}){

    return(
        <div className="col-3 mb-4">
            <div className="card text-center border-0 bg-light">
                <img className="card-img-top" src={img} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{city}</p>
                    <small className="text-secondary">Capacidad de {capacity} espectadores.</small>
                </div>
            </div>
        </div>
    );
}