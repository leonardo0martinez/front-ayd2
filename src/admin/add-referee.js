import React from "react";
import { useState } from 'react';

export function AddReferee(){

    //FORM DATA
    const [form, setForm] = useState({
        nombre: ''
    });

    const handleChange = (evt) => {
        setForm({...form, [evt.target.name]: evt.target.value});
    };

    async function submitCredentials(evt){
        const reqOps = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        };
        const response = await fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/post/insertArbitro`, reqOps);
        const data = await response.json().then( res => {console.log(res)}); 
    }
    return(
        <div className="row justify-content-center align-items-center text-center p-2">
            <h3>Agregar Árbitro</h3>
            <hr></hr>
            <div className="col-6">
                <div className="form-group mt-3">
                    Nombre del Árbitro:
                    <input name="nombre" 
                        value={form.nombre} 
                        onChange={handleChange} 
                        type="text" 
                        className="form-control" 
                        placeholder="Nombre de Árbitro"
                        required />
                </div>
                <div className="row justify-content-center align-items-center mt-4">
                    <div className="col-5 p-2">
                        <button type="submit" className="btn btn-dark col-12" onClick={submitCredentials}>Agregar Árbitro</button>
                    </div>
                </div> 
            </div>
        </div>
    );
}