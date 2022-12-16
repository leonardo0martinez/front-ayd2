import React from "react";


export function Player({name, img, age, position, number}){
    return(
        <div className="col-3 mb-3 p-2">
            <div className="border rounded">
                <img src={img} alt="" width="170px" height="220px"/>
                <div className="text-center mt-2">
                    <p><strong>{name}</strong></p>
                    <p>{position}</p>
                    <p><small>{age} años</small></p>
                </div> 
            </div>
        </div>
    );
}