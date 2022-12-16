import React from "react";

export function Event({id, team1, team2, gol1, gol2}){

    return(
        <div className="row">
            <div className="col-5 text-start">
                <img
                    src="https://flagcdn.com/w320/za.png"
                    srcSet="https://flagcdn.com/w640/za.png 2x"
                    width="30"
                    alt="South Africa"
                    className="me-2">
                </img>
                {team1}
            </div>
            <div className="col-2 text-center">
                <strong>
                    {gol1}
                    <span className="m-1">VS</span>
                    {gol2}
                </strong>
            </div>
            <div className="col-5 text-end">
                {team2}
                <img
                    src="https://flagcdn.com/w320/za.png"
                    srcSet="https://flagcdn.com/w640/za.png 2x"
                    width="30"
                    alt="South Africa"
                    className="ms-2">
                </img>
            </div>
        </div>
    );
}