import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";

export function LoginForm(){

    const [formData, setFormData] = useState({
        email:"",
        password: ""
    });

    //INPUT HANDLER
    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value});
    };

    const submitCredentials = async () =>{
        console.log(formData);
        const reqOps = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        if(formData.email === 'admin' && formData.password === 'admin'){
            localStorage.setItem("id_user", "admin");
            window.location.href = "./dashboard";
        }
        // const response = await fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/login`, reqOps);
        // const data = await response.json().then( res => {
        //     console.log(res);
        // });
    }

    return(
        <div className="bg-light p-4">
            <h4>Iniciar Sesión</h4>
            <hr></hr>
            <div className="form-group mt-3">
                <input name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    type="text" 
                    className="form-control" 
                    placeholder="Nombre de Usuario"
                    required />
            </div>
            <div className="form-group mt-3">
                <input name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    type="password" 
                    className="form-control" 
                    placeholder="Contraseña"
                    required/>
            </div>
            <div className="form-group mt-3">
                <button type="submit" className="btn btn-dark col-12" onClick={submitCredentials}>Iniciar Sesión</button>
                <center>
                    <Link  to="/register" className="link-primary">Registrarse</Link>
                </center>
            </div> 
        </div>
    );
}