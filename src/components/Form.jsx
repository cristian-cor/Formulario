import React, { useState, Fragment } from "react";
import { v4 as uuidv4 } from 'uuid'
import Table from "./Table";

const Form = () => {

    const [form, setForm] = useState({
        id:uuidv4(), nombre : '', apellido: ''
    });
    const [datos, setDatos] = useState([]);

    const handleChangue = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDatos([
            ...datos,
            form
        ])
        console.log(form)
        setForm({id:uuidv4(), nombre: '', apellido: '' })
        e.target.reset()
    };
    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className="container" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Ingresa nombre:</label>
                    <input type="text" className="form-control" name="nombre" onChange={handleChangue}  required />
                        <div className="form-text">Debe ingresar su nombre completo.</div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Ingresa apellido</label>
                    <input type="text" className="form-control" name="apellido" onChange={handleChangue} />
                    <div className="form-text">Debe ingresar su apellido completo.</div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Table
            form={form}
            setForm={setForm}
            datos={datos}
            setDatos={setDatos}
            />
        </Fragment>
    );
};

export default Form;    