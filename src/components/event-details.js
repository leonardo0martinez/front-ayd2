import React from "react";


export function EventDetails({teams}){
    console.log(teams)
    return(
        <div className="container-fluid p-0">
            <h6 className="text-secondary">Tipo de Partido</h6>
            {/* BANDERAS y MARCADORES*/}
            <div className="row">
                <div className="col-5 justify-content-center align-items-center">
                    <img src="https://flagcdn.com/w320/za.png" width="60%" alt="South Africa"/>
                    <h5 className="my-4"> Argentina </h5>
                    <h5> 4 </h5>
                </div>
                <div className="col-2">
                    <h1 className="mt-5">VS</h1>
                </div>
                <div className="col-5 justify-content-center align-items-center">
                    <img src="https://flagcdn.com/w320/za.png" width="60%" alt="South Africa"/>
                    <h5 className="my-4"> HOLANDA </h5>
                    <h5> 3 </h5>
                </div>
            </div>

            {/* JUGADORES QUE MARCARON GOL  */}
            <div className="row m-0 p-0">
                <strong style={{fontWeight:"600"}}>Goles</strong>
                <hr></hr>
                <div className="col-5">
                    <ul className="list-group">
                        <li className="list-group-item border-0 bg-light">Messirve <strong>90'</strong></li>
                        <li className="list-group-item border-0 bg-light">Messirve <strong>90'</strong></li>
                        <li className="list-group-item border-0 bg-light">Messirve <strong>90'</strong></li>
                    </ul>
                </div>
                <div className="col-2"></div>
                <div className="col-5">
                    <ul className="list-group">
                        <li className="list-group-item border-0 bg-light">Messirve <strong>90'</strong></li>
                        <li className="list-group-item border-0 bg-light">Messirve <strong>90'</strong></li>
                        <li className="list-group-item border-0 bg-light">Messirve <strong>90'</strong></li>
                    </ul>
                </div>
            </div>

            {/* ESTADIO y ARBITRO */}
            <div className="row m-0 mt-3 p-0">
                <div className="col-5"><strong style={{fontWeight:"600"}}>Árbitro</strong></div>
                <div className="col-2"></div>
                <div className="col-5"><strong style={{fontWeight:"600"}}>Estadio</strong></div>
            </div>
            <div className="row m-0 p-0">
                <hr></hr>
                <div className="col-5">
                    NOMBRE DEL ARBITRO
                </div>
                <div className="col-2"></div>
                <div className="col-5">
                    NOMBRE DEL ESTADIO XD
                    {/* <img src="https://ca-times.brightspotcdn.com/dims4/default/aeca7d5/2147483647/strip/true/crop/5490x3635+0+0/resize/1200x795!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F06%2F95%2F0f6f64c34edd9a36de710e69510f%2Fla-photos-1staff-597718-sp-0821-sofi-stadium16-wjs.jpg"
                        alt=""
                        width="60%"
                    /> */}
                </div>
            </div>

        </div>
    );
}