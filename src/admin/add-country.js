import React from "react";
import { useState } from 'react';
import axios from 'axios';

export function AddCountry(){

    //FORM DATA
    const [form, setForm] = useState({
        nombre: ''
    });
    const [file, setFile] = useState();

    const handleChange = (evt) => {
        if(evt.target.name === "file"){
            setFile(evt.target.files[0]);
        }else{
            setForm({...form, [evt.target.name]: evt.target.value});
        }
    };

    async function submitCredentials(evt){
        let formData =  new FormData();
        formData.append('nombre', form.nombre)
        formData.append('file', file);
        const url = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/country/newCountry`;
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };
        axios.post(url, formData, config);        
    }
    return(
        <div className="row justify-content-center align-items-center text-center p-2">
            <h3>Agregar País</h3>
            <hr></hr>
            <div className="col-6">
                <div className="form-group mt-3">
                    Nombre del País:
                    <input name="nombre" 
                        value={form.nombre} 
                        onChange={handleChange} 
                        type="text" 
                        className="form-control" 
                        placeholder="Nombre de Equipo"
                        required />
                </div>
                <div className="form-group mt-3">
                    Bandera del País: 
                    <input name="file" 
                        value={form.file} 
                        onChange={handleChange} 
                        type="file" 
                        className="form-control" 
                        placeholder="Subir Imagen"
                        required/>
                </div>
                <div className="row justify-content-center align-items-center mt-4">
                    <div className="col-5 p-2">
                        <button type="submit" className="btn btn-dark col-12" onClick={submitCredentials}>Crear Equipo</button>
                    </div>
                </div> 
            </div>
        </div>
    );
}