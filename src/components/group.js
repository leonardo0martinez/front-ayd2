import React from "react";

export function Group({name, teams, points}){
    
    return(
        <div className="col-4 mb-4">
            <table className="table">
                <thead>
                    <tr>
                        <th className="col-10">GRUPO {name}</th>
                        <th className="col-2">Puntos</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        teams !== undefined &&
                        teams.map( (name, index) =>{
                            return(
                                <tr key={index}>
                                    <td>{name}</td>
                                    <td className="text-center">{points[index]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}