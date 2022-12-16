import React from "react";
import { useState } from 'react';
import axios from 'axios';

export function AddPlayer(){

    //FORM DATA    
    const [form, setForm] = useState({
        nombre: '',
        edad: 0,
        posicion: '',
        numero: 0,
        equipo: ''
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
        //sadsads
        formData.append('nombre', form.nombre);
        formData.append('edad', form.edad);
        formData.append('posicion', form.posicion);
        formData.append('numero', form.numero);
        formData.append('equipo', form.equipo);
        formData.append('file', file);

        const url = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/player/newPlayer`;
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };
        
        axios.post(url, formData, config);
    }
    return(
        <div className="row justify-content-center align-items-center text-center p-2">
            <h3>Agregar Jugador</h3>
            <hr></hr>
            <div className="col-6">
                <div className="form-group mt-3">
                    Nombre del Jugador:
                    <input name="nombre" 
                        value={form.nombre} 
                        onChange={handleChange} 
                        type="text" 
                        className="form-control" 
                        placeholder="Nombre del Jugador"
                        required />
                </div>
                <div className="form-group mt-3">
                    Edad:
                    <input name="edad" 
                        value={form.edad} 
                        onChange={handleChange} 
                        type="number" 
                        className="form-control" 
                        placeholder="Edad del Jugador"
                        required />
                </div>
                <div className="form-group mt-3">
                    Seleccionar Posición:
                    <select name="posicion" 
                        className="form-select" 
                        value={form.posicion} 
                        onChange={handleChange} >
                        <option key={1} value="Goalkeeper">Goalkeeper</option>
                        <option key={2} value="Defender">Defender</option>
                        <option key={3} value="Midfielder">Midfielder</option>
                        <option key={4} value="Forward">Forward</option>
                    </select>
                </div>
                <div className="form-group mt-3">
                    Número de Camiseta:
                    <input name="numero" 
                        value={form.numero} 
                        onChange={handleChange} 
                        type="number" 
                        className="form-control" 
                        placeholder="Número de Camiseta"
                        required />
                </div>
                <div className="form-group mt-3">
                    Imagen del Jugador:
                    <input name="file" 
                        value={form.file} 
                        onChange={handleChange} 
                        type="file" 
                        className="form-control" 
                        placeholder="Subir Imagen"
                        required/>
                </div>
                <div className="form-group mt-3">
                    Nombre del Equipo:
                    <input name="equipo" 
                        value={form.equipo} 
                        onChange={handleChange} 
                        type="text" 
                        className="form-control" 
                        placeholder="Nombre del Equipo"
                        required />
                </div>
                <div className="row justify-content-center align-items-center mt-4">
                    <div className="col-5 p-2">
                        <button type="submit" className="btn btn-dark col-12" onClick={submitCredentials}>Crear Jugador</button>
                    </div>
                </div> 
            </div>
        </div>
    );
}